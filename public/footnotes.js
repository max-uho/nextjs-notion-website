// VERY HACKY FOOTNOTES

var np = $('.notion-page-content-inner').first();

window.onload = function () {

    $('.notion-aside').remove(); //cleanup useless socials

    


    var found = [],
        rxp = /\[\^.*?\]/g,
        str = np.html(),
        curMatch;

    while (curMatch = rxp.exec(str)) {
        found.push(curMatch[0]);
    }

    var f_number = 0;

    if (str != null) {

        str = str.replace(rxp, function () {
            ++f_number;
            fs_number = f_number.toString();
            return '<sup id="fnref:note' + fs_number + '"><a href="#fn:note' + fs_number + '" class="footnote-ref" role="doc-noteref">' + fs_number + '</a></sup>';
        });

        np.html(str);

        var npc = np;
        var allnotes = '<div class="footnotes"><ol>';

        var arrayLength = found.length;
        
        for (var i = 0; i < arrayLength; i++) {
            var clean_note = found[i].slice(2, -1);
            f_note_content = '<li id=fn:note' + (i + 1).toString() + ' role="doc-endnote"><p>' + clean_note + '<a href=#fnref:note' + (i + 1).toString() + ' class="footnote-backref" role="doc-backlink">&#8617;&#xfe0e;</a></p></li>';
            allnotes = allnotes+f_note_content;
        }
        allnotes = allnotes+'</ol></div>'

        npc.append(allnotes);
    }

    np.sidenotes();
    // I'll turn on sidenotes when I have figure out the css to it
    
};

$(window).on('load resize', function(){
    var win = $(this); //this = window
    if (win.width() >= 1360) { np.sidenotes('show'); }else { np.sidenotes('hide') } 
});