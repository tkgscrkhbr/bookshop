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
        <button>update</button>
        <button>delete</button>
    </td>

</tr>`)
// console.log(str)
elTbody.innerHTML=str.join('')
// console.log(elTbody.innerHTML)
}
