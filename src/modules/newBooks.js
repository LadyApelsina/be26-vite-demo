import { postNewBook } from './firebase.js'
import {Books} from './Books.js'

const bookForm = document.getElementById('bookForm')
const inputTitel = document.getElementById('titel')
const inputAuthor = document.getElementById('author')
const inputImgUrl = document.getElementById('imgUrl')

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
        Thank you for your contribution! 
        ------------------------`)

        bookForm.reset()
})
