'use strict'

const gBooks=[
{ id:'t101',
title:'harry potter',
price:120,
},
{ id:'t102',
title:'the adventures of',
price:120,
},
{ id:'t103',
title:'Shrek',
price:120,
}

]

function getBooks(){
    return gBooks
}


function removeBook(bookId) {
    var idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function updateprice(bookId,nprice){
    var idx = gBooks.findIndex(book => book.id === bookId)
    gBooks[idx].price=nprice
}