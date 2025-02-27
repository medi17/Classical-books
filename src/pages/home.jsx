import Header from "../components/header"
import Hero from "../components/hero"
import BooksList from "../components/books_list"

import "../components/components.css"

const Home = () => {
     return (
          <div>
               <Header />
               <Hero />
               <BooksList />
          </div>
     )
}

export default Home
