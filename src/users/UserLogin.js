import React, {useContext, useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextProvider'
import mongoosy from 'mongoosy/frontend';
const {Login} = mongoosy;

const UserLogin = (props) => {
  const {updateUserStatus} = useContext(UserContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitLogin = async (e) => {
    e.preventDefault();
    let user = await Login.login({username, password})
    if (user.js.error) {
      setMessage('Username or password is wrong!')
    }else{
      updateUserStatus({user})
      props.history.push('/controlboard')
    }
  }
  
  return (
    <div className="container">
      <div className="user-login">
        <form className="input-form" onSubmit={submitLogin}>
          <input name="username" type="text" placeholder='username' required
            value={username} onChange={(e) => setUsername(e.target.value)} />
          <input name="password" type="password" placeholder='password' required
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="submit-buttons">
            <input type="submit" value='LOGIN'/>
          </div>
        </form>
         <p style={{color: 'red'}}>{message}</p>
         <p>If you're not a user... <br/> Please <Link to="/register">register</Link> first.</p>
      </div>

      <div className="background">
        <svg className="background" viewBox="0 0 1874 1080.446">
          <path fill="rgba(68,149,255,0.651)" stroke="rgba(0,0,0,0.329)" strokeWidth="100px" 
            strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" 
            id="Path_4" 
            d="M 416.2294006347656 -2.817545237121521e-07 L 1457.770751953125 -2.817545237121521e-07 C 
              1687.64794921875 -2.817545237121521e-07 1874.000122070313 192.5970764160156 1874.000122070313 
              430.1777038574219 L 1874.000122070313 650.2685546875 C 1874.000122070313 887.84912109375 
              1687.64794921875 1080.4462890625 1457.770751953125 1080.4462890625 L 416.2294006347656 
              1080.4462890625 C 186.3522338867188 1080.4462890625 7.400896606668539e-07 887.84912109375 
              7.400896606668539e-07 650.2685546875 L 7.400896606668539e-07 430.1777038574219 C 
              7.400896606668539e-07 192.5970764160156 186.3522338867188 -2.817545237121521e-07 
              416.2294006347656 -2.817545237121521e-07 Z">
          </path>

          <svg className="football_field">
            <rect fill="rgba(243,243,243,1)" stroke="rgba(254,254,254,1)" strokeWidth="10px" strokeLinejoin="miter" 
              strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" id="football_field" rx="390.25" ry="390.25" 
              x="11%" y="5.5%" width="1460px" height="960px">
            </rect>
          </svg>
        </svg>
      </div>
    </div>
  )
}

export default UserLogin
