import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth.js';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
const isAuth = useSelector(state=>state.auth.isAuthenticated);
  return (
    <Fragment>
      {!isAuth && <Auth/>}
      {isAuth && <Header/>}
      {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
    
  );
}

export default App;
