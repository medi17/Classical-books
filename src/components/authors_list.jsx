import Profile from './profile'
import biography from './biography'

const AuthorsList = () => {
     return (
          <div>
               { 
                    biography.map((author) => (
                    <Profile author={author} key={author.id}/>
               ))
          }
               
          </div>
     )
}

export default AuthorsList
