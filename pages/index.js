import styles from '../styles/Home.module.css'
import Cards  from './components/cards'
import React from 'react'
import { nanoid } from 'nanoid'



const cards = [
     
  { id: 0, key: nanoid()+1, name: 'cuce', status: '', img: '/images/cuce.webp', isActive:false },
  { id: 1, key: nanoid()+2, name: 'cuce', status: '', img: '/images/cuce.webp' , isActive:false},
  { id: 2, key: nanoid()+3, name: 'aragorn', status: '', img: '/images/aragorn.webp' , isActive:false},
  { id: 3, key: nanoid()+4, name: 'aragorn', status: '', img: '/images/aragorn.webp' , isActive:false},
  { id: 4, key: nanoid()+5, name: 'bilbo', status: '', img: '/images/bilbo.webp' , isActive:false},
  { id: 5, key: nanoid()+6, name: 'bilbo', status: '', img: '/images/bilbo.webp' , isActive:false},
  { id: 6, key: nanoid()+7, name: 'galadriel', status: '', img: '/images/galadriel.webp' , isActive:false},
  { id: 7, key: nanoid()+8, name: 'galadriel', status: '', img: '/images/galadriel.webp' , isActive:false},
  { id: 8, key: nanoid()+9, name: 'frodo', status: '', img: '/images/frodo.webp' , isActive:false},
  { id: 9, key: nanoid()+'a', name: 'frodo', status: '', img: '/images/frodo.webp' , isActive:false},
  { id: 10, key: nanoid()+'b', name: 'gandalf', status: '', img: '/images/gandalf.jpg' , isActive:false},
  { id: 11, key: nanoid()+'c', name: 'gandalf', status: '', img: '/images/gandalf.jpg' , isActive:false},
  { id: 12, key: nanoid()+'d', name: 'legolas', status: '', img: '/images/legolas.jpg' , isActive:false},
  { id: 13, key: nanoid()+'e', name: 'legolas', status: '', img: '/images/legolas.jpg' , isActive:false},
  { id: 14, key: nanoid()+'f', name: 'samwise', status: '', img: '/images/samwise.webp' , isActive:false},
  { id: 15, key: nanoid()+'g', name: 'samwise', status: '', img: '/images/samwise.webp' , isActive:false},
].sort(() => Math.random() - .5)



function Home() {
 
  return (
    
    

    <div className={styles.container}>
      <title>Memory Game</title>
      <h1>LOTR</h1>
      <Cards cards={cards}/>
      <main className={styles.main}>
      </main>
    </div>
  )
  }
  export default  Home;