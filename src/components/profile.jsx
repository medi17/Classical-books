import Emma from '../assets/emma.jpg';
// import biography from './biography';

const Profile = ({ author }) => {
     const {works:{first: first, second: second, third: third}} = author

     return (
          <div className='profile'>
               <div className="profile-image"><img src={author.proPic} alt="Profile-Picture" /></div>
               <div className='biography'>
                    <h1>{author.name}<span> ({author.lifetime})</span></h1>
                    <p>{author.bio}
                    </p>
                    <h2>{author.pronoun} popular works</h2>
                    <div className="book-images">
                         <div className='book-pic'><img src={first} alt="book-cover" /></div>
                         <div className='book-pic'><img src={second} alt="book-cover" /></div>
                         <div className='book-pic'><img src={third} alt="book-cover" /></div>
                    </div>
               </div>
          </div>
     )
}

export default Profile
