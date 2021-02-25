
// VERY HACKY FOOTNOTES

window.onload = function() {


    var np = $('.notion-page').first();
    var found = [],
    rxp = /\[\^.*?\]/g,
    str = np.html(),
    curMatch;

    while( curMatch = rxp.exec( str ) ) {
        found.push(curMatch[0]);
    }

    console.log(found)

    var f_number = 0;

    str = str.replace(rxp, function() {
        ++f_number;
        fs_number = f_number.toString();
        return '<sup id="fnref:'+fs_number+'"><a href="#fn:'+fs_number+'" class="footnote-ref" role="doc-noteref">'+ fs_number +'</a></sup>';
    });

    np.html(str);

    $(".notion-page-content").append( "<section class=footnotes role=doc-endnotes>\
        <hr>\
        <ol>\
        " );

    var arrayLength = found.length;
    for (var i = 0; i < arrayLength; i++) {
        var clean_note = found[i].slice(2,-1);
        f_note_content = '\
                <li id=fn:'+(i+1).toString()+' role=doc-endnote>\
                    <p>\
                        '+clean_note+'\
                        <a href=#fnref:'+(i+1).toString()+' class=footnote-backref role=doc-backlink>&#8617;&#xfe0e;</a>\
                    </p>\
                </li>\
        ';


        $(".notion-page-content").append(f_note_content);
        //Do something
    }

    $(".notion-page-content").append( "</ol>\
          </section>\
        " );

};
