import React, { useState } from 'react'

// the signIn , LogIn functions

function SignIn() {
    const [condition, setCondition] = useState([])
    const [password, setPassword] = useState([])
    const [email, setEmail] = useState([])
    const [emailCondition, setEmailCondition] = useState(false)
    const [passwordCondition, setPasswordCondition] = useState(false)
    const checkCondition = () => {
        // if the condition are met this is boolean
    }
    const emailValidity = (email) => {
        // the presence of .com and @ in text to continue either disable signIn button and post pop up
        (email.search('@') > 0) ? console.log("email is okay") : console.log('email missing @')
    }
    const passwordValidity = (password) => {
        // the length and a mixture of strings characters until the right 
        // amount is detected and should be of right length
        (password.length > 6 && (password.search('#') > 0 || password.search('$') > 0 || password.search('&') > 0 || password.search('*') > 0)) ? console.log('password is strong') : console.log('weak password')
    }

    return (
        <div>
            <div className='email'>
                <label>Email</label>
                <input type='email' placeholder='email@gmail.com' onChange={e => { setEmail(e.target.value); emailValidity(email) }} />
                <div className='emailverification'>
                    {
                        (emailCondition) ? <h3>nice email</h3> : <h3>characters missing @ or .com</h3>
                    }
                </div>
            </div>
            <div className='password'>
                <label>password</label>
                <input type='password' onChange={e => { setPassword(e.target.value); passwordValidity(password) }} />
            </div>
            <div className='passwordverification'>
                {
                    (passwordCondition) ? <h3>Now that password is tough</h3> : <h3>WOW! Weak,mix strings,numbers,special characters</h3>
                }
            </div>
            <button>SignIn</button>
        </div>
    )
}

export default SignIn