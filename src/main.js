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
    console.error("Kunde inte ladda böcker från Firebase:", error)
  }
}

loadBooks()


//! Test 1
/*
readBtn.addEventListener('click', () => {
    reviewDiv.style.display= "block"
})
    */

/*
//! Test 2
readBtn.addEventListener("click", function () {
    if (reviewDiv.style.display === "none") {
        reviewDiv.style.display = "block";
    } else {
        reviewDiv.style.display = "none";
    }
});
*/
//! test 3
/*
readBtn.addEventListener('click', () => {
    reviewDiv.classList.toggle("hidden")
    //LÄgger till class på isRead
    readBtn.classList.toggle("readBtnActive")
    readBtn.innerHTML = "I've read this 🔖"
})

ratingBooks.forEach(book => {
  book.addEventListener("click", () => {
    const value = Number(book.dataset.value);

    currentBook.rating = value; // spara värdet

    updateBooks(value); // uppdatera UI
  });
});

function updateBooks(value) {
  ratingBooks.forEach(book => {
    const bookValue = Number(book.dataset.value);

    if (bookValue <= value) {
      book.classList.remove("fa-book");
      book.classList.add("fa-book-open");
    } else {
      book.classList.remove("fa-book-open");
      book.classList.add("fa-book");
    }
  });
}
*/
//! readBtn test
/*
readBtn.addEventListener('click', () => {
    reviewDiv.classList.toggle("hidden");
    readBtn.classList.toggle("readBtnActive")
    readBtn.innerHTML = "I've read this 🔖"

    // Hämta ikonerna EFTER att reviewDiv visas
    const ratingBooks = document.querySelectorAll("#review i");

    ratingBooks.forEach(book => {
      book.addEventListener("click", () => {
        book.classList.toggle("activeBook");

  // Räkna hur många böcker som är markerade
  const activeCount = document.querySelectorAll("#review i.activeBook").length;

  currentBook.rating = activeCount;
      });
    });
});
/*
likeBookbtn.addEventListener('click', () => {
  likeBookbtn.classList.remove('fa-regular.fa-heart')
  likeBookbtn.classList.add('activeHeart')
  console.log('💖💖💖')
})
*/

/*
function updateBooks(value) {
  // Hämta alla bok-ikoner i review-diven
  const ratingBooks = document.querySelectorAll("#review i");

  ratingBooks.forEach(book => {
    const bookValue = Number(book.dataset.value);

    if (bookValue <= value) {
      // Markera bok
      book.classList.remove("fa-book");
      book.classList.add("fa-book-open");
    } else {
      // Avmarkera bok
      book.classList.remove("fa-book-open");
      book.classList.add("fa-book");
    }
  });
}
  */