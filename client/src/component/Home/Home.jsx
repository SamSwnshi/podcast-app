import React from 'react'
import homestyle from "./Home.module.css";
import masked from "../../assets/Mask group.png";
import logo from "../../assets/QuesLogo 1.png"
import logo2 from "../../assets/logo.png";
import google from "../../assets/google.png";
const Home = () => {
    return (
        <div className={homestyle.mainContainer}>
            <div className={homestyle.left}>
                <div className={homestyle.imageContainer} >
                    <img src={masked} alt="Masked overlay" className={homestyle.maskedImage} />
                </div>
                <div className={homestyle.data}>
                    <img src={logo} alt="logo" className={homestyle.logo} />
                    <p className={homestyle.details}>Your podcast <br />
                        will no longer<br />
                        be just a hobby
                    </p>
                    <p className={homestyle.subtitle}>Supercharger Your Distribution <br />
                        using you AI assistant!</p>
                </div>
            </div>
            <div className={homestyle.right}>
                <img src={logo2} alt="Logo" className={homestyle.image2} />
                <p className={homestyle.intro}>Welcome to <br /><span className={homestyle.introQ}>Quest.AI</span> </p>

                <form className={homestyle.formData}>
                    <input type="text" placeholder='Email Address' className={homestyle.inputTag} />
                    <input type="password" placeholder='Password' className={homestyle.inputTag} />
                    <div className={homestyle.inputCheckboxDiv}>
                        <label className={homestyle.checkboxlabel}>
                            <input type="checkbox"  />
                            Remember me
                        </label>
                        <p className={homestyle.forgot} >Forgot Password?</p>
                    </div>
                    <button className={homestyle.button}>Login</button>
                </form>
                <div className={homestyle.googleDiv}>
                    <img src={google} alt="" className={homestyle.googleImg} />
                    <p className={homestyle.googleName}>Continue with Google</p>
                </div>
                <p className={homestyle.noAccount}>Don’t have an account? <span className={homestyle.createAccount}>Create Account</span></p>
            </div>
        </div>
    )
}

export default Home
