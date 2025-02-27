import Header from "../components/header"
import GenreList from '../components/Generes_list'
import { philosopy } from '../components/data'
import { romance } from '../components/data'
import { psychology } from '../components/data'

const Genre = () => {
     return (
          <div>
               <Header />
               <GenreList header="Philosopy" data={philosopy} />
               <GenreList header="Romance" data={romance} />
               <GenreList header="Psychology" data={psychology} />
          </div>
     )
}

export default Genre
