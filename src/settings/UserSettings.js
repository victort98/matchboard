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
      <div style={{position: 'relative', margin: '5px 10px', border: '1px solid #fff', 
        borderRadius:'5px', backgroundColor: "rgb(100, 180, 255)"}}>
        <h2 style={{textAlign:'center', margin: '10px 0', color: '#fff'}}>USERS</h2>
      </div>
      <div className='user-info'>       
        {allUsers&&allUsers.map(user=>
         (<div key={user._id}
            style={{margin: '10px 10px 0 10px', padding: '20px 20px 0 20px', border: '1px solid rgb(100, 180, 255)',
              borderRadius: '5px', backgroundColor: 'rgba(246,251,255, 0.7)', boxShadow: '3px 3px 5px rgba(0,0,0, 0.1)'}}>
            <div className='l-col' style={{fontSize: '1.2rem', paddingBottom: '5px'}}>
              <h4>user: {user.username}</h4>
              <p>role: {user.roles}</p>
              <hr/>
            </div>
            <div className='r-col'>
              <p>GAME</p>
              <form className='radio-buttons' >
                <div id="game" style={{display: 'flex', fontSize: '12px'}}>
                  <label>FOOTBALL
                    <input type="radio" value="football" name="game" id='football'/>
                  </label>
                  <label>BASKETBALL
                    <input type="radio" value="basketball" name="game"/>
                  </label>
                  <label>HOCKEY
                    <input type="radio" value="hockey" name="game"/>
                  </label>
                </div>
              </form>
            </div>
            <hr/>
            <div className='b-col' style={{display:'flex'}}>
              <input type="button" value="EDIT" onClick={()=>editUser(user)}  style={{ width: '50px', padding: '3px 10px'}}/>
              <input type="button" value="DELETE" onClick={() => deleteUser(user)} style={{ width: '90px', padding: '3px 10px'}}/>
            </div>
          </div>)
        )}
        
      </div>
    </>
  )
}

export default UserSettings
