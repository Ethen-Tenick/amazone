import React, { useState } from 'react'
import './SignIn.css'
// the signIn , LogIn functions

function SignIn() {

    /////////////////////////////////// GLOBAL VARIABLES ////////////////////////////

    const [dataBase, setDataBase] = useState([])

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

    const sendToDatabase = () => {
        if (password.length > 0 && email.length > 0) {
            setDataBase((prev) => [...prev, { email, password }]);
            console.log('done')
        }
    }

    //////////////////////////////// THE SIGNIN END  ////////////////////////////////

    //////////////////////////////// THE LOGIN PART   ////////////////////////////////
    const [userPresence, setUserPresence] = useState(false)
    const [loginPassword, setLoginPassword] = useState([])
    const [loginEmail, setLoginEmail] = useState([])


    const searchUser = () => {
        dataBase.map((person) => {
            (person.email == loginEmail && person.password == loginPassword) ? setUserPresence(true) : setUserPresence(false)
        })
    }

    //////////////////////////////// THE LOGIN END   ////////////////////////////////

    return (
        <div className='Main_credectial_container'>
            <h2>Credential Detail Functionality</h2>

            <div className='SignUp_main_container'>
                <h4>The SignUp part</h4>
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
                        (passwordCondition) ? <h3>Now that password is tough</h3> : <h3>Incooperate special characters</h3>
                    }
                </div>
                {
                    (condition) ? <button className='greenbtn' onClick={() => { sendToDatabase(); console.log('Succesfully Signed Up') }}>SignUp</button> : <button className='redbtn'>SignUp</button>
                }
            </div>


            <div className='LogIn_main_container'>
                <h2>The Login part</h2>
                <div className='email_log'>
                    <label>Email</label>
                    <input placeholder='example@gmail.com' onChange={e => { setLoginEmail(e.target.value) }} />
                </div>
                <div className='password_log'>
                    <label>password</label>
                    <input type='password' onChange={e => { setLoginPassword(e.target.value) }} />
                </div>
                <button className='bluebtn' onClick={() => { searchUser() }}>Login</button>
            </div>
            {
                (userPresence) ? <h5>Bienvenue</h5> : <h5>No such User</h5>
            }
        </div>
    )
}

export default SignIn