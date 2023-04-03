import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillMediumSquare} from 'react-icons/ai'
import Image from 'next/image'
import Adam from '../public/Adam.png'
import code from '../public/code.png'
import design from '../public/design.png'
import db from '../public/db.png'
import {useState} from 'react';
import games from '../public/games.jpg'
import chat from '../public/chat.jpg'
import delicious from '../public/delicious.jpg'
import keandip from '../public/keandip.jpg'
import flatiron from '../public/flatiron.jpg'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>developedbyadam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white p-10 md:px-20 lg:px-40 dark:bg-black '>
        <section className="min-h-screen">
          <nav className='py-10 mg-12 flex justify-between dark:text-white' >
            <h1 className='text-2xl text-teal-500'>developedbyadam</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl ml-8'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://docs.google.com/document/d/1JMBScfEEVe2E1qbukrn3BzZwd4J80BTqWYTYq4g_mcY/edit'>Resume</a>       
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>Adam Khodier</h2>
            <h3 className='text-2xl py-2 md:text-3xl  text-teal-500'>Full Stack Software Engineer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>Junior Full Stack Software Engineer open to work. Check me out with the links down below!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-teal-500'>
            <a href='https://www.linkedin.com/in/adam-khodier/'><AiFillLinkedin/></a>
            <a href='https://www.youtube.com/channel/UCLlHRk8keWknFImPBX1cQ9Q'><AiFillYoutube/></a>
            <a href='https://github.com/atkhodier1297'><AiFillGithub/></a>
            <a href='https://medium.com/@khodieradam1297'><AiFillMediumSquare/></a>
          </div>
          <div className='flex justify-center py-10'>
            <Image className='rounded-full w-60 h-60 md:h-70 md:w-70' src={Adam} alt="adam-picture"/>
          </div>
        </section> 
        <section>
          <div className='text-center p-10'>
            <h3 className='text-2xl py-2 md:text-3xl  text-teal-500'>About Me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>After obtaining my Bachelors Degree in Political Science with Cum Laude Honors, I decided to pursue software engineering because it was always a hobby of mine. After doing research, I decided to join Flatiron School's Full Stack Software Engineering program. Since graduating the program I have been looking for work as a Junior Developer!
            </p>
          </div>
          <div className="shadow-lg shadow-teal-500 my-5 rounded-xl">
          <Image className='rounded-xl' src={keandip} alt="kean-diploma"/>
          </div>
          <div className="shadow-lg shadow-teal-500 my-5 rounded-xl">
          <Image className='rounded-xl' src={flatiron} alt="flatiron-diploma"/>
          </div>
          <div className='text-center p-10'>
            <h3 className='text-2xl py-2 md:text-3xl  text-teal-500'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>I write code and design Full Stack Web Applications using the skills I learned from Flatiron School. 
            </p>
          </div>
          <div className='md:text-xl max-w-xl mx-auto'>
            <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} alt="code-pic" />
              <h3 className="font-medium pt-8 pb-2  text-teal-500 ">
                Code Your Project
              </h3>
              <p className="py-2 dark:text-gray-400">
              Do you have an idea for your next great website? Let's make it a
              reality.
              </p>
              <h4 className="py-4 text-teal-500">Programming Languages I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">React.JS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Next.JS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Ruby on Rails</p>
            </div>
            <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt="design-pic" />
              <h3 className="font-medium pt-8 pb-2  text-teal-500 ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-500"> Web Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">CSS/HTML</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Styled Components</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Semantic UI</p>
            </div>
            <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl my-10">
              <Image src={db} width={100} height={100} alt="db-pic" />
              <h3 className="font-medium pt-8 pb-2  text-teal-500 ">
                Database Integration
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating and organizing project databases with proper table relationships.
              </p>
              <h4 className="py-4 text-teal-500">Database Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">SQLite</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">PostgreSQL</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">GraphQL</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Firebase</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center my-10">
            <h3 className='text-2xl py-2 md:text-3xl  text-teal-500'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>Below are some of the projects that I have created, 
            check them out by clicking on the embedded image link!
            </p>
          </div>
          <h4 className='text-2xl py-2 md:text-2xl  text-teal-500 text-center'>Delicious Recipes</h4>
          <h4 className='text-2xl py-2 md:text-xl  dark:text-gray-400 text-center'>Created with React.JS, Styled Components, and Spoonacular API</h4>
          <div className="shadow-lg shadow-teal-500 my-5 rounded-xl">
          <a href='https://youtu.be/70aQyfU-3T0'>
          <Image className='rounded-xl' src={delicious} alt="food app"/>
          </a>
          </div>
          <h4 className='text-2xl py-2 md:text-2xl  text-teal-500 text-center'>ATK GAMES</h4>
          <h4 className='text-2xl py-2 md:text-xl  dark:text-gray-400 text-center'>Created with React.JS, Ruby on Rails, PostgreSQL, and Semantic UI</h4>
          <div className="shadow-lg shadow-teal-500 my-5 rounded-xl">
          <a href='https://www.youtube.com/watch?v=TkBDp29Rk6c&t=170s'>
          <Image className='rounded-xl' src={games} alt="game app"/>
          </a>
          </div>
          <h4 className='text-2xl py-2 md:text-2xl  text-teal-500 text-center'>ATK-CHAT</h4>
          <h4 className='text-2xl py-2 md:text-xl  dark:text-gray-400 text-center'>Created with Next.JS, Firebase, Google Auth, and Tailwind</h4>
          <div className="shadow-lg shadow-teal-500 my-5 rounded-xl">
          <a href='https://atk-chat.vercel.app/'>
          <Image className='rounded-xl' src={chat} alt="chat app"/>
          </a>
          </div>
          
        </section>
      </main>
    </div>
  )
}
