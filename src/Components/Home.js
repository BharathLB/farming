import React from "react";
import './home.css'
function demo(){
    return(
        <>
        <div class="he">
             <div>
                <i class="fa fa-phone"><span className='phone'>   +91 9856748987</span></i>
                 <i class="fa fa-envelope" className='email'>   agrimachin.gmail.com</i>
            </div>
            <div class="my">
                <button href="#">Shop</button><span className="vl"></span>
                <button href="#">Cart</button><span className="vl"></span>
                <button href="#">Account</button>
            </div>
        </div>
        <div class="navsec">
            <div><h1 style={{color:"#47260F"}}>FARMING</h1></div>
            <div className='navba'> 
                <button value="./apex/Home" className='as'>Home</button>
                <button value="./apex/About" className='as'>About</button>
                <button value="./apex/About" className='as'>Pages</button>
                <button value="./apex/About" className='as'>Blogs</button>
                <button value="./apex/Contactuss" className='as'>Contact</button>
            </div>
        </div>

        </>
    )
}
export default demo;