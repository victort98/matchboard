import React, {useContext, useEffect} from 'react'
import ControlBoard from '../controlboard/ControlBoard'
import { UserContext } from '../contexts/UserContextProvider'
import {Route, Redirect} from 'react-router-dom'

import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;

const ProtectedRoutes = (props) => {
  const {userStatus, updateUserStatus} = useContext(UserContext);

  const logout = async() => {
    await Login.logout();
    updateUserStatus({ user: false });
  }

  let user = userStatus.user
  user = user || { roles: [] }
  let admin = user.roles.includes('admin');

  // useEffect(()=>{
  //    setTimeout(() => {
  //     logout()
  //   }, 2000);
  // }, [admin])

  return (
    <>
      <Route path='/controlboard'
        render={()=>(admin?(<ControlBoard/>):(<Redirect to="/"/>))}
      />
    </>
  )
}

export default ProtectedRoutes
