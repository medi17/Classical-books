import Crime from "../assets/crime_n_punishment.jpg"
import Wuthering from "../assets/wuthering_heights.jpg"

const Hero = () => {
     return (
          <div className="hero">
               <div className="hero-motto">
                    <h1>The Legacy of Literary Masters</h1>
               </div>
               <div className="hero-images">
                    <div className="crime"><img src={Crime} alt="crime_and_punishment" /></div>
                    <div className="wuthering"><img src={Wuthering} alt="wuthering_heights_book" /></div>
               </div>
          </div>
     )
}

export default Hero
