import React, {useState, createContext} from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState({user:null})

  const updateUserStatus = (update) => setUserStatus({
    ...update
  })
  
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
