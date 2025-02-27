import BooksCard from './books_card'

const Generes_list = ({header, data}) => {

     return (
          <div className='generes-container'>
               <div className='genre-header'>
                    <h2>{header}</h2>
               </div>
               <div className='books-list'>
                    {
                         data.map((book) => (
                              <BooksCard book={book} key={book.id}/>
                    ))  
                    }
               </div>
          </div>
     )
}

export default Generes_list
