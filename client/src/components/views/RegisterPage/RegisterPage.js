import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';

const RegisterPage = (props) => {
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }

    const onNameHandler = e => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = e => {
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        if(password !== confirmPassword){
            return alert('패스워드가 일치하지 않습니다.')
        }

        let body = {
            email,
            password,
            name
        }
        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push('/login')
                } else{
                    alert('회원가입 실패')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button type="submit">
                    회원 가입
                </button>
            </form>
        </div>
    )
};

export default withRouter(RegisterPage);