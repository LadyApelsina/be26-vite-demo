import {deleteBook, updateBook} from './firebase.js'

const allBooksWrapper = document.getElementById('allBooks')
const savedBooksWrapper = document.getElementById('savedBooksWrapper')

export class Books {
    constructor(bookObject) {
        this.id = bookObject.id
        this.titel = bookObject.titel
        this.author = bookObject.author
        this.isRead = bookObject.isRead
        this.score = bookObject.score
        this.imgUrl = bookObject.imgUrl
        this.isLiked = bookObject.isLiked
    }
    haveRead(){
        this.isRead = !this.isRead
        updateBook(this.id, {isRead: this.isRead})
        
        if (this.isRead) {
          this.reviewDiv.style.display = 'flex'
          this.haveReadBtn.classList.add('readBtnActive')
          this.haveReadBtn.innerText = "I haven't read"
        } else {
            this.reviewDiv.style.display = 'none'
            this.haveReadBtn.classList.remove('readBtnActive')
            this.haveReadBtn.innerText = "I have read"
    }
    } 
    addScore(value){
        if(!this.isRead) return

        this.score = value
        updateBook(this.id, {score: this.score})
        
        const allIcons = document.querySelectorAll('.review i')

        allIcons.forEach(icon => {
            if(icon.dataset.value <= this.score) {
                icon.classList.add('iconActive')
            }
            else {
                icon.classList.remove('iconActive')
            }
        })
    }
    async delete(){
        
       await deleteBook(this.id) 
       
       if(this.wrapperElement) {
          this.wrapperElement.remove()
       }

       console.log(`
        ${this.titel} has been deleted!
        bookID: ${this.id}`)
    }
    likeBook(){
        this.isLiked = !this.isLiked
        updateBook(this.id, { isLiked: this.isLiked })

        if(this.isLiked) {
            savedBooksWrapper.appendChild(this.wrapperElement)
            this.likeBookBtn.classList.add('likeBook')
        }
        else {
            allBooksWrapper.appendChild(this.wrapperElement)
            this.likeBookBtn.classList.remove('likeBook')
        }
    }
    //! Skapar DOM element & funktioner
    render(){
        const bookWrapper = document.createElement('div')
        bookWrapper.classList.add('bookWrapper')

        const infoDiv = document.createElement('div')
        infoDiv.classList.add('infoDiv')

        const likeBookBtn = document.createElement('button')
        likeBookBtn.innerText = '🔖'
        likeBookBtn.addEventListener('click', () => this.likeBook())
        this.likeBookBtn = likeBookBtn

        const titelP = document.createElement('p')
        titelP.innerHTML = `<b><u>Titel:</u> </b> ${this.titel}`

        const authorP = document.createElement('p')
        authorP.innerHTML = `<b><u>Author:</u> </b> ${this.author}`

        const haveReadBtn = document.createElement('button')
        haveReadBtn.classList.add('haveReadBtn')
        haveReadBtn.innerText = 'I have read'
        haveReadBtn.addEventListener('click', () => this.haveRead())

        const reviewDiv = document.createElement('div')
        reviewDiv.classList.add('review')
          for (let i = 1; i <= 5; i++) {
            const icon = document.createElement('i')
            icon.dataset.value = i
            icon.classList.add('fa-solid', 'fa-book')
            icon.addEventListener('click', () => this.addScore(i))
            reviewDiv.appendChild(icon)
          }

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('imgDiv')

        const img = document.createElement('img')
        img.src = this.imgUrl  
        img.classList.add('bookImg')

        const deleteBookBtn = document.createElement('button')
        deleteBookBtn.classList.add('deleteBook')
        deleteBookBtn.innerText = 'X'
        deleteBookBtn.addEventListener('click', () => this.delete())

        imgDiv.appendChild(img)
        imgDiv.appendChild(deleteBookBtn)

        infoDiv.appendChild(likeBookBtn)
        infoDiv.appendChild(titelP)
        infoDiv.appendChild(authorP)
        infoDiv.appendChild(haveReadBtn)
        infoDiv.appendChild(reviewDiv)

        bookWrapper.appendChild(infoDiv)
        bookWrapper.appendChild(imgDiv)

        this.wrapperElement = bookWrapper
        allBooksWrapper.appendChild(this.wrapperElement)

        this.reviewDiv = reviewDiv
        this.haveReadBtn = haveReadBtn

        return bookWrapper
    }
}