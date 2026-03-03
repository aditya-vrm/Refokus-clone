import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';




const app = () => {
  
  const scroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-[#161618] text-white font-satoshi font-light'>
      <Navbar />
      <main className="pt-24">
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      </main>

    </div>
  )
}

export default app;