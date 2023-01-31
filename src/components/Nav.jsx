import './Nav.css'
import logo from '../assets/trollface.svg'

function Nav() {
   return (
      <nav>
         <div className="nav--container span--max">
            <div className="nav--logo">
               <img src={ logo } alt="troll face" />
               <h3 className="logo--detail">Meme Generator</h3>
            </div>
            <div className="nav--items">
               <p>React Course - Project 3</p>
            </div>
         </div>
      </nav>
   )
}

export default Nav