import React from 'react';
import PrivateComponent from 'components/private';
import PublicComponent from 'components/public';

class AppContainer extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
  }
  render() {
    const { isLoggedIn } = this.state;
    const { logout } = this;
    return <App logout={logout} isLoggedIn={isLoggedIn} />
  }

  logout = () => {
    localStorage.removeItem('jwt')
    window.location.href = '/'
  }
}


function App({ isLoggedIn, logout }) {

  return (
    <div>
      {isLoggedIn ? <PrivateComponent logout={logout} /> : <PublicComponent />}
    </div>
  );
}

export default AppContainer;
