'use strict'

function oninit(){
    render()
}
 
function render(){
var elTbody= document.querySelector('tbody')
// var books=getBooks()
// console.log(books)
var str= getBooks().map(book => 
    `<tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button>read</button>
        <button onclick="onUpdateBook('${book.id}')">update</button>
        <button onclick="onRemoveBook('${book.id}')">delete</button>
    </td>

</tr>`)
// console.log(str)
elTbody.innerHTML=str.join('')
// console.log(elTbody.innerHTML)
}


function onRemoveBook(bookid){
removeBook(bookid)
render()

}

function onUpdateBook(bookid){
    var nprice= prompt('what is the new price?')
    updateprice(bookid,nprice)
    render()
}



