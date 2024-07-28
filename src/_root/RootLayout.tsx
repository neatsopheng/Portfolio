import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Service from './pages/Service'

const RootLayout = () => {
  return (
    <>
        <header className='sticky top-0 z-10'>
            <Navbar />
        </header>
        <main className=' text-slate-200 '>
            <Home />
            <About />
            <Service />
            <Projects />
            {/* <Contact /> */}
        </main>
        <footer className="bg-slate-900 flex flex-col items-center gap-5 md:flex h-auto p-5">

            <Footer />
        </footer>
    </>
  )
}

export default RootLayout