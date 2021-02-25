var found = [],
rxp = /\[\^.*?\]/g,
str = "a [^first footnote] with [not a footnote] [^second footnote] braces",
curMatch;

while( curMatch = rxp.exec( str ) ) {
    found.push( curMatch[1] );
}

//yourTextArea.value = yourTextArea.value.replace(/\$\$(.+?)\$\$/, '<i>$1</i>')

str = "a [^first footnote] with [not a footnote] [^second footnote] braces";


// VERY HACKY FOOTNOTES

window.onload = function() {
    np = $('.notion-page').first();
    str = np.html();
    
    //str = str.replace(/\[\^.*?\]/g, '<sup id="fnref:foobar"><a href="#fn:foobar">1</a></sup>');
    var f_number = 0;
    str = str.replace(/\[\^.*?\]/g, function() {
        ++f_number;
        fs_number = f_number.toString();
        return '<sup id="fnref:'+fs_number+'"><a href="#fn:'+fs_number+'">'+ fs_number +'</a></sup>';
    });
        
    np.html(str);
};


//console.log( $('.notion-page').text());


