import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import DropZone from './dropzone/Dropzone'; 

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <div className="welcome-header">
      Welcome {user.name}! <input type="button" onClick={handleLogout} value="Logout" /></div><br /><br />
      <DropZone />
    </div>
  );
}

export default Dashboard;