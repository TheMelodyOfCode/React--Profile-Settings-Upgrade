import * as React from 'react'

import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/header/header.component.jsx';
import BgVideo from "./components/bg-video/bg-video.component";
import UserSettings from './components/userSettings/userSettings.component.jsx';

import { UserProvider } from './context/userContext.context.jsx';
import { getAllItemsfromDB } from './utils/firebase.utils.js';
import { useLocalStorageState } from './utils/syncLocalStorage.utils.js';

function ErrorFallback({error, resetErrorBoundary,}) {
  return (
    <section className="game">
        <div className="game__board"> 
          <div className="game__board--rowsContainer">
            <h2 className="cardItem__card__title" >Error: </h2>
            <h5 className="cardItem__card__content" > {error.message}</h5>
          </div>
        </div>
  </section>
  )
}

function App() {

  const [userData, setUserdata] = useLocalStorageState("userInfo", {
    username: 'username',
    tagline: 'tagline',
    bio: 'bio',
  } )


  React.useEffect(()=>{ 
    const getCardItem = async ()=> {
            const userInfo = await getAllItemsfromDB()
            setUserdata(userInfo)
    };
    getCardItem()
},[setUserdata]);


  return (
      <main className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BgVideo />
          <Header />
          <UserProvider >
            <UserSettings userData={userData}/>
          </UserProvider>
        </ErrorBoundary>
      </main>
  );
}

export default App;
