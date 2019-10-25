import React from 'react';
import PrivateComponent from 'components/private';
import PublicComponent from 'components/public';

class AppContainer extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false
  }
  render() {
    const { isLoggedIn } = this.state;
    return <App isLoggedIn={isLoggedIn} />
  }
}


function App({ isLoggedIn }) {

  return (
    <div>
      {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
    </div>
  );
}

export default AppContainer;
