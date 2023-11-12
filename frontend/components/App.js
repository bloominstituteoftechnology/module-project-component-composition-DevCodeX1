import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = "DEMO_KEY"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto(){
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
    
    //  setApod ({
    //       "date": "2023-11-03",
    //       "explanation": "That bright beacon you've seen rising in the east just after sunset is Jupiter. Climbing high in midnight skies, our Solar System's ruling gas giant was at its 2023 opposition, opposite the Sun in planet Earth's sky, on November 2. But only a few days earlier, on October 28, the Moon was at its own opposition. Then both Full Moon and Jupiter could share this telephoto field of view. The celestial scene is composed from two exposures, one long and one short, blended to record bright planet and ev...",
    //       "hdurl": "https://apod.nasa.gov/apod/image/2311/_GHR7338_3_firma_picc.jpg",
    //       "media_type": "image",
    //       "service_version": "v1",
    //       "title": "Jupiter by Moonlight",
    //       "url": "https://apod.nasa.gov/apod/image/2311/_GHR7338_3_firma_picc1024.jpg"
    //     })
       
  }, [])


  if(!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.data}
      />
    </section>
  )
}

export default App
