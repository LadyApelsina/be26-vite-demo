export const baseURL = 'https://goodreads-9a30f-default-rtdb.europe-west1.firebasedatabase.app/'

export async function getFirebaseBooks() {

    try{
      const response = await fetch(baseURL + 'books.json')
      const data = await response.json()
      return data
    }
    catch(error) {
      throw error
    }
}

export async function postNewBook(bookData) {
    const options = {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {'Content-Type': 'application/json'}
    }

    try {
      const response = await fetch(baseURL + 'books.json', options)
      const data = await response.json()
      return data
    }
    catch(error) {
        throw error
    }
} 

//! PATCH + uppdatera isRead & Score
export async function updateBook(id, partialData) {
    const url = baseURL + 'books/' + id + '.json'

    const options = {
        method: 'PATCH',
        body: JSON.stringify(partialData),
        headers: {'Content-Type': 'application/json'}
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch(error) {
        throw error
    }
}

export async function deleteBook(id) {
    const url = baseURL + 'books/' + id + '.json'

    const options = {
        method: 'DELETE'
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch(error) {
        throw error
    }
}
