import React, { useState } from 'react'
import './SignIn.css'
// the signIn , LogIn functions

function SignIn() {

    /////////////////////////////////// THE SIGNIN PART ////////////////////////////

    const [condition, setCondition] = useState(false)
    const [password, setPassword] = useState([])
    const [email, setEmail] = useState([])
    const [emailCondition, setEmailCondition] = useState(false)
    const [passwordCondition, setPasswordCondition] = useState(false)


    const checkCondition = () => {
        // if the condition are met this is boolean
        (passwordCondition && emailCondition) ? setCondition(true) : setCondition(false)
    }
    const emailValidity = (email) => {
        // the presence of .com and @ in text to continue either disable signIn button and post pop up
        (email.search('@') > 0) ? setEmailCondition(true) : setEmailCondition(false)
    }
    const passwordValidity = () => {
        // the length and a mixture of strings characters until the right 
        // amount is detected and should be of right length
        for (var i = 0; i < password.length; i++) {
            if (((password[i] == '#') || (password[i] == '@') || (password[i] == '$') || (password[i] == '&') || (password[i] == '*')) && password.length > 3) {
                setPasswordCondition(true)
                break
            } else {
                setPasswordCondition(false)
            }
        }
    }

    //////////////////////////////// THE SIGNIN END  ////////////////////////////////

    //////////////////////////////// THE LOGIN PART   ////////////////////////////////


    //////////////////////////////// THE LOGIN END   ////////////////////////////////

    return (
        <div className='Main_credectial_container'>
            <h2>Credential Detail Functionality</h2>

            <div className='SignIn_main_container'>
                <h4>The Signin part</h4>
                <div className='email'>
                    <label>Email</label>
                    <input type='email' placeholder='email@gmail.com' onChange={e => { setEmail(e.target.value); emailValidity(email) }} />
                    <div className='emailverification'>
                        {
                            (emailCondition) ? <h3>nice email</h3> : <h3>characters @ </h3>
                        }
                    </div>
                </div>
                <div className='password'>
                    <label>password</label>
                    <input type='password' onChange={e => { setPassword(e.target.value); passwordValidity(); checkCondition() }} />
                </div>
                <div className='passwordverification'>
                    {
                        (passwordCondition) ? <h3>Now that password is tough</h3> : <h3>Incooperate special characters & password must be above 6 characters</h3>
                    }
                </div>
                {
                    (condition) ? <button className='greenbtn'>SignIn</button> : <button className='redbtn'>SignIn</button>
                }
            </div>


            <div className='LogIn_main_container'>
                <h4>The Login part</h4>
            </div>

        </div>
    )
}

export default SignIn