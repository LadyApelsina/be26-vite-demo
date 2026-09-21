import { postNewBook } from './firebase.js'
import {Books} from './Books.js'

const bookForm = document.getElementById('bookForm')
const inputTitel = document.getElementById('titel')
const inputAuthor = document.getElementById('author')
const inputImgUrl = document.getElementById('imgUrl')

//! Hämta formvärden 
//? + skapa objekt(titel, author, imgURL, isRead, score)
//? Skicka med callback till main.js

bookForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const newBook = {
        titel: inputTitel.value,
        author: inputAuthor.value,
        isRead: false, 
        score: 0,
        isLiked: false,
        imgUrl: inputImgUrl.value
    }
      const response = await postNewBook(newBook)
      const id = response.name

    const bookObject = {
      id: id,
      titel: newBook.titel,
      author: newBook.author,
      isRead: newBook.isRead,
      score: newBook.score,
      isLiked: newBook.isLiked,
      imgUrl: newBook.imgUrl
    }
    const book = new Books(bookObject)
    book.render()

    console.log(`
        ------------------------
        New book added!🔖 
        Titel:${newBook.titel}
        Author: ${newBook.author}
        ------------------------`)

        bookForm.reset()
})


/*
const newBooksDiv = document.getElementById('allBooks')

bookForm.addEventListener('submit',(event) => {
    event.preventDefault()

    const newTitel = inputTitel.value
    const newAuthor = inputAuthor.value

    const newBook = {
        titel: newTitel,
        author: newAuthor,
        isRead: false, 
        score: 0
    }
 
    const newBookWrapper = document.createElement('div')
    newBookWrapper.classList.add('bookWrapper')

    //!Test 1

    newBookWrapper.innerHTML = `
      <div class="infoDiv">
        <i class="fa-regular fa-heart"></i>
        <p><b>Titel: </b> ${newBook.titel}</p>
        <p><b>Author: </b> ${newBook.author}</p>
        <button class="readBtn">Have read <i class="fa-solid fa-check"></i></button>
        <div class="review">
          <i data-value="1" class="fa-solid fa-book"></i>
          <i data-value="2" class="fa-solid fa-book"></i>
          <i data-value="3" class="fa-solid fa-book"></i>
          <i data-value="4" class="fa-solid fa-book"></i>
          <i data-value="5" class="fa-solid fa-book"></i>
        </div>
      </div>

      <div class="imgDiv">
        <img class="bookImg" src="./img/lotr.jpg" alt="">
          <button class="deleteBook">X</button>
      </div>
    `

//! test 2
   /*
    newBookWrapper.innerHTML = `
      <div class="infoDiv">        <p><b>Titel: </b> ${newBook.titel}</p>
        <p><b>Author: </b> ${newBook.author}</p>
        <button class="readBtn">Have read <i class="fa-solid fa-check"></i></button>
          <div class="review">
            <i data-value="1" class="fa-solid fa-book"></i>
            <i data-value="2" class="fa-solid fa-book"></i>
            <i data-value="3" class="fa-solid fa-book"></i>
            <i data-value="4" class="fa-solid fa-book"></i>
            <i data-value="5" class="fa-solid fa-book"></i>
          </div>
      </div>

      <div class="imgDiv">
        <img class="bookImg" src="./img/lotr.jpg" alt="">
          <button class="deleteBook">X</button>
      </div>
    `
*/
/*
    newBooksDiv.appendChild(newBookWrapper)
    //newBook.push(newBooksDiv)
    //moveBooks(newBook)
    //! <img src="${inputImgUrl.value}" alt="">
    console.log(`
        ------------------------
        New book added!🔖 
        Titel:${newBook.titel}
        Author: ${newBook.author}
        ------------------------`)
    //! version 1 innan RESET
    //inputTitel.value = ""
    //inputAuthor.value = ""
    bookForm.reset()
})

//Flytta newBook till allBooks
/*
function moveBooks(){
    const moveBook = allBooks
    document.createElement('div')
    moveBook.classList.add('bookWrapper')
    moveBook.textContent = `
    <p>Test</p>
    Titel: ${newBook.titel}
    `
    console.log('MOVED')
}
moveBooks()
*/
/*
function moveBooks(){
    const moveBook = newBooksDiv
    //moveBook.document.getElementById('bookWrapper')
}

moveBooks()

        const haveRead = document.createElement('button')
        haveRead.classList.add('test')
        */