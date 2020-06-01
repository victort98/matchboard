import React, {useContext} from 'react'
import ControlBoard from '../controlboard/ControlBoard'
import AdminPanel from '../users/AdminPanel'
import OperatorPanel from '../users/OperatorPanel'
import { UserContext } from '../contexts/UserContextProvider'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoutes = (props) => {
  const {userStatus} = useContext(UserContext);

  let user = userStatus.user
  user = user || { roles: [] }
  let admin = user.roles.includes('admin');
  let operator = user.roles.includes('operator');

  return (
    <>
      <Route path='/admin'
        render={()=>(admin?(<AdminPanel/>):(<Redirect to="/"/>))}
      />
      <Route path='/operator'
        render={()=>(operator?(<OperatorPanel/>):(<Redirect to="/"/>))}
      />
      <Route path='/controlboard'
        render={()=>(admin || operator?(<ControlBoard/>):(<Redirect to="/"/>))}
      />
    </>
  )
}

export default ProtectedRoutes
