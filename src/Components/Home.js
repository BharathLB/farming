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
                <button href="#">Shop</button><span class="vl"></span>
                <button href="#">Cart</button><span class="vl"></span>
                <button href="#">Account</button>
            </div>
        </div>
        <div class="navsec">
            <div><h1 style={{color:"#47260F"}}>FARMING</h1></div>
            <div class="navba"> 
                <button value="./apex/Home" styleclass="as">Home</button>
                <button value="./apex/About" styleclass="as">About</button>
                <button value="./apex/About" styleclass="as">Pages</button>
                <button value="./apex/About" styleclass="as">Blogs</button>
                <button value="./apex/Contactuss" styleclass="as">Contact</button>
            </div>
        </div>

        </>
    )
}
export default demo;