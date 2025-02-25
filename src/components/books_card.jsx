
const BookCard = ({book}) => {

     return (
          <div className="book-card">
               <div className="book-image"><img src={book.image} alt="Book Cover" /></div>
               <div className="book-description">
                    <h2><span>Title:</span>{book.title}</h2>
                    <h2><span>Author:</span>{book.author}</h2>
                    <h2><span>Language:</span>{book.language}</h2>
               </div>
          </div>
     )
}

export default BookCard
