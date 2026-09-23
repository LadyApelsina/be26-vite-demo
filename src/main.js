import {getFirebaseBooks} from './modules/firebase.js'
import {Books} from './modules/Books.js'
import './modules/newBooks.js'

const asideBox = document.getElementById("asideWrapper")
const asideDiv = document.getElementById('asideDiv')
const openBtn = document.getElementById("asideBtn")
const closeBtn = document.getElementById("closeAsideBtn")

//? Öppna form
openBtn.addEventListener("click", () => {
  asideBox.style.display = "block"
  asideDiv.style.display = "block"
})
  
//? Stäng form
closeBtn.addEventListener("click", () => {
  asideBox.style.display = "none"
  asideDiv.style.display = "none"
})

async function loadBooks() {
  try {
    const data = await getFirebaseBooks()

    for (const id in data) {
      const bookObj = {
        id: id,
        titel: data[id].titel,
        author: data[id].author,
        imgUrl: data[id].imgUrl,
        isRead: data[id].isRead,
        score: data[id].score,
        isLiked: data[id].isLiked
      }

      const book = new Books(bookObj)
      book.render()
    }

  } catch (error) {
    console.error("Could not load books from Firebase:", error)
  }
}

loadBooks()
