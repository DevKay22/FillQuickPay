import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <div>
        <div className="sign">
        <div className="signup">
            <div className="top">
                <h1>Create Your Account</h1>
                <p>Welcome back! Please enter your details</p>
                
            </div>

            
          
            <div className="middle">
                <button>
                <span className="fc"><FcGoogle /></span> 
                <span className="btntext">Sign up with Google</span>               
                </button>

                <div className="space">
                    <div className="hr"></div>
                    <h2>OR</h2>
                    <div className="hr1"></div>
                </div>

                <form action="/" method="get">
                <div className="name">
                    <label htmlFor="firstname"> Name</label>
                    <input type="text" name="firstname" id="firstname"
                     placeholder="Enter your name" />
                </div>

                <div className="name">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                     placeholder="Enter your email" />
                </div>

                <div className="name">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    placeholder="* * * * * * *" />
                </div>

                <div className="name">
                    <label htmlFor="repassword">Retype password</label>
                    <input type="password" name="repassword" id="repassword"
                     placeholder="* * * * * * *"  />
                </div>

                <div>
                    <input type="checkbox" name="accept" id="accept" value={"accept"} />
                    <label htmlFor="accept" className="note">I accepted all terms and conditions</label>
                </div>

                <div >
                    <button type="submit" className="btn">Sign in</button>
                </div> 
                
                </form>

               

            </div>
            <div className="bottom">
                <p>Already have an account? <span className="last">Sign in</span></p>
            </div>
        </div>
        <div className="banner"></div>
    </div>
    </div>
    
  )
}

export default Signup