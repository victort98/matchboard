import React, {useState, createContext} from 'react'
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState({user:null})

  const updateUserStatus = (update) => setUserStatus({
    ...userStatus,
    ...update
  })

  const checkIfLoggedIn = async () => {
    let user = await Login.check();
    console.log(user)
    updateUserStatus({ user: user.js.username ? user : false });
  }

  if (userStatus.user === null) {
    checkIfLoggedIn();
    return null;
  }
  
  const values = {
    userStatus,
    updateUserStatus
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
