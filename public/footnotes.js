var found = [],
rxp = /\[\^.*?\]/g,
str = "a [^first footnote] with [not a footnote] [^second footnote] braces",
curMatch;

while( curMatch = rxp.exec( str ) ) {
    found.push( curMatch[1] );
}

//yourTextArea.value = yourTextArea.value.replace(/\$\$(.+?)\$\$/, '<i>$1</i>')

str = "a [^first footnote] with [not a footnote] [^second footnote] braces";

//$('.notion-page').html($('.notion-page').html().replace(/\[\^.*?\]/g, '<i></i>'));
//console.log( $('.notion-page').html() );



window.onload = function() {
    np = $('.notion-page').first();

    str = np.html();

    str = str.replace(/\[\^.*?\]/g, '');

    np.html(str);
};


//console.log( $('.notion-page').text());


