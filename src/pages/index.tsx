import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import HybridScroll from "./Components/HybridScroll";
import ProductDisplay from "./Components/Products1";
import Products from "./Components/Products2";
import ProductDis from "./Components/Products3";


export default function Home() {
  return (
    <main className='flex flex-col'>
      <NavBar color="#542C35" textColor="#F7CBAD"/>
      <Hero/>
      <About/>
      <HybridScroll>
        <ProductDisplay/>
        <Products/>
        <ProductDis/>
      </HybridScroll>
      <SignIn/>
      <Login/>
      
    </main>
  );
}
