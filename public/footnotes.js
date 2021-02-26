// VERY HACKY FOOTNOTES

window.onload = function () {


    var np = $('.notion-page').first();


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

        var npc = $('.notion-page').first();
        var allnotes = '<section class="footnotes" role="doc-endnotes"><ol>';

        var arrayLength = found.length;
        
        for (var i = 0; i < arrayLength; i++) {
            var clean_note = found[i].slice(2, -1);
            f_note_content = '<li id=fn:note' + (i + 1).toString() + ' role="doc-endnote"><p>' + clean_note + '<a href=#fnref:note' + (i + 1).toString() + ' class="footnote-backref" role="doc-backlink">&#8617;&#xfe0e;</a></p></li>';
            allnotes = allnotes+f_note_content;
        }
        allnotes = allnotes+'</ol></section>'

        npc.append(allnotes);
    }

    np.sidenotes();

};