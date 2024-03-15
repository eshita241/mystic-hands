import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import HybridScroll from "./Components/HybridScroll";
import Product1 from "./Components/Products1";
import Product2 from "./Components/Products2";
import Product3 from "./Components/Products3";
import MarketPlace from "./Components/MarketPlace";
import Community from "./Components/Community";



export default function Home() {
  return (
    <main className='flex flex-col' style={{overflowX: 'hidden', overflowY: 'hidden',}}>
      <NavBar color="#542C35" textColor="#F7CBAD"/>
      <Hero/>
      <About/>
      <HybridScroll>
        <Product1/>
        <Product2/>
        <Product3/>

      </HybridScroll>
      <MarketPlace/>
      <Community/>
      <SignIn/>
      <Login/>
      
    </main>
  );
}
