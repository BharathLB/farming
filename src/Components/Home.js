import React from "react";
import './home.css'
function demo(){
    return(
        <>
        {/* Top Navigation Bar */}
        <div className="he">
             <div>
                <i class="fa fa-phone"><span className='phone'>   +91 9856748987</span></i>
                 <i class="fa fa-envelope" className='email'>   agrimachin.gmail.com</i>
            </div>
            <div class="my">
                <a href="#ss">Shop</a><span className="vl"></span>
                <a href="#d">Cart</a><span className="vl"></span>
                <a href="#d">Account</a>
            </div>
        </div>

        {/* Header */}

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

        {/* Sliders */}

       {/*<div class="slider">
            <input type="image" img src="https://www.sktperfectdemo.com/demos/farming/wp-content/themes/farming/images/slides/slider1.jpg"
      alt="Image 1" id="img-1"/>
             <input type="image" img src="https://www.sktperfectdemo.com/demos/farming/wp-content/themes/farming/images/slides/slider2.jpg"
      alt="Image 2" id="img-2"/>
            <input type="image" img src="https://www.sktperfectdemo.com/demos/farming/wp-content/themes/farming/images/slides/slider3.jpg"
      alt="Image 3" id="img-3"/>
        </div>*/}

      {/* Footer */}
      <div class="foot">
        <div style={{color:"white"}}>
            <p style={{color:"white",fontSize:"20px",fontWeight:"700"}}>CONTACT INFO</p>
            <hr class="hr"/>
            <p style={{lineHeight:"1.8"}}>Street 238,52 tempor <br></br> Donec ultricies mattis nulla, suscipit <br></br>risus tristique ut.</p><br></br>
            <p>Phone: +91 9845665856</p>
            <p>Email:<a href="mailto"> tech@active.agency</a></p>
            <p>Website: www.agricultural.com</p>
        </div>
        <div>
            <p style={{color:"white",fontSize:"20px",fontWeight:"700"}}>OUR SERVICES</p>
            <hr class="hr"/>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Grain Marketing</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Feed Solutions</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Risk Management</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Organic Foods</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Organic Solutions</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="footertitle"></i> Organic Animals</a>
        </div>
        <div>
            <p style={{color:"white",fontSize:"20px",fontWeight:"700"}}>QUICK LINKS</p>
            <hr class="hr"/>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> Home</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> About</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> Service</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> Shop</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> Blog</a><br></br>
            <a href="#d"><i class="fa fa-angle-right" className="fotblog"></i> Contact Us</a>
        </div>
        <div>
            <p style={{color:"white",fontsize:"20px",fontweight:"700"}}>NEWSLETTER</p>
            <hr class="hr"/>
            <div style={{paddingtop:"5px"}}>
                <input type="text" placeholder="Enter your email" id="theTextInput" style={{padding:"5px"}}/>
                <button value="Submit" placeholder="Submit" style={{padding:"6px"}}/>
            </div>
        </div>
    </div>
        </>
    )
}
export default demo;