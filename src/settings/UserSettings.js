import React, {useState, useEffect} from 'react'
import mongoosy from 'mongoosy/frontend';
const { User} = mongoosy;

const UserSettings = () => {
  const [allUsers, setAllUsers] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [userInEdit, setUserInEdit] = useState(false);

  async function getAllUsers() {
    let users = await User.find({});
    if (users.js.error) {
      users = [{ username: users.error, roles: [], errored: true }]
    }
    setAllUsers(users);
  }

  async function deleteUser(user) {
    await user.remove();
    await getAllUsers();
  }

  function editUser(user) {
    setUserInEdit(user);
    setUsername(user.username);
    setPassword('');
    setRoles(user.roles);
  }

    const submitForm = async e => {
    e.preventDefault();
    let user
    if (!userInEdit) {
      user = new User({
        username,
        password,
        roles: roles.split(',').map(x => x.trim())
      });
    }
    else {
      user = userInEdit;
      Object.assign(user, { username, roles, password });
      if (!password) { delete user.password; }
    }
    await user.save();
    if (user.js.error) {
      alert(user.error.errMsg || user.error);
    }
    await getAllUsers();
    setUsername('');
    setPassword('');
    setRoles('');
    setUserInEdit(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div style={{display: 'none'}}>
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Email" value={username} onChange={e=>setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}} />
          <input type="text" placeholder="Roles (comma separated)" value={roles} onChange={e=>setRoles(e.target.value)} />
          <input type="submit" value={userInEdit ? 'Save' : 'Add user'} />
        </form>
      </div>
      <div>        
        {allUsers&&allUsers.map(user=>
         (<div key={user._id}
            style={{margin: '10px', padding: '10px', border: '1px solid #fff'}}>
            <div className='l-col'>
              <h3>{user.username}</h3>
              <p>{user.roles}</p>
            </div>
            <div className='r-col'>
            </div>
            <hr/>
            <div className='b-col'
              style={{display:'flex'}}>
              <input type="button" value="EDIT" onClick={()=>editUser(user)}/>
              <input type="button" value="DELETE" onClick={() => deleteUser(user)}/>
            </div>
          </div>)
        )}
        
      </div>
    </>
  )
}

export default UserSettings
