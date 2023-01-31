import './Form.css'
import { useState, useEffect } from 'react'
import memesData from './memesData'

function Form() {

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/21tqf4.jpg"
   })

   const [allMemeImages, seteAllMemeImages] = useState(memesData.data.memes)

   function getMemeImage() {
      setMeme( prevMeme => {
         return {
            ...prevMeme,
            randomImage: allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
         }
      } )
   } 


   // handle change in input
   function handleChange(event) {

      const {name, value} = event.target

      setMeme(prevMemeData => {
         return {
            ...prevMemeData,
            [name]: value
         }
      })
   }

   // make api request
   useEffect(() => {
      async () => {
         const res = await fetch('https://api.imgflip.com/get_memes')
         const data = await res.data
   
         seteAllMemeImages(prevMemeArr => {
            return [
               ...prevMemeArr,
               data
            ]
         })
      }
   }, [])
   
   return (
      <>
         <section className="meme--input">
            <form action="" className="meme--form span--max">
               <div className="form--flex">
                  <input 
                     type="text" 
                     name="topText" 
                     id="toptext" 
                     placeholder='Top text'
                     onChange={ handleChange } 
                  />
                  <input 
                     type="text" 
                     name="bottomText" 
                     id="toptext" 
                     placeholder='Bottom text' 
                     onChange={ handleChange }
                  /> 
               </div>
               <button
                  onClick={e => {
                     e.preventDefault()
                     getMemeImage()
                  }}
               >Get a new meme image 🖼</button>
            </form>
         </section>
         <section className="meme--image">
            <div className="meme--image-cont span--max">
               <img src={ meme.randomImage } alt="" className="meme--thumbnail" />
               <div className="meme--text">
                  <p className="top--text">{ meme.topText }</p>
                  <p className="bottom--text">{ meme.bottomText }</p>
               </div>
            </div>
         </section>
      </>
   )
}

export default Form