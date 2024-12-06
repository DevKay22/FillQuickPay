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

                <div>
                    <label htmlFor="name"> Name</label>
                    <input type="text" name="" id="" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="" />
                </div>

                <div>
                    <label htmlFor="password">Retype password</label>
                    <input type="password" name="" id="" />
                </div>

                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">I accepted all terms and conditions</label>
                </div>

                <div>
                    <button type="submit">Sign in</button>
                </div>

            </div>
            <div className="bottom">
           
            </div>
        </div>
        <div className="banner"></div>
    </div>
    </div>
    
  )
}

export default Signup