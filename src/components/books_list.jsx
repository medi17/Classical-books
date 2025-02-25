import data from "./data"
import BooksCard from "./books_card"

const BooksList = () => {
     return (
          <div className="books-list">
               {
                    data.map((book) => (
                         <BooksCard book={book} key={book.id}/>
                  ))  
               }
          </div>
     )
}

export default BooksList
