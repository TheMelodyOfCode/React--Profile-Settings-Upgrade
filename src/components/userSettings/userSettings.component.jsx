import * as React from 'react'
import {dequal} from 'dequal'

import { useUser} from '../../context/userContext.context'

import { updateUser } from '../../utils/helperFunctions.utils'

const UserSettings =({userData})=>{

  const [{user, status, error}, userDispatch] = useUser()

  const isPending = status === 'pending'
  const isRejected = status === 'rejected'

  const [formState, setFormState] = React.useState(user)

  const isChanged = !dequal(user, formState)

  function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})  
  }

  function handleSubmit(event) {
    event.preventDefault()

    updateUser(userDispatch, user, formState).catch(error => {
      // ignor error
    })
  }

  // function UserDataDisplay() {
  //   const [{user}] = useUser()
  //   return (           
  //     <pre className="formItems__dataDisplay__text">{JSON.stringify(user, null, 2)}</pre>
  //   )
  // }
  

    return (
    <section className="formItems">          
                <form onSubmit={handleSubmit} className="formItems__card">
                    <img className="formItems__card__img" src="img/uploadProfilePic.jpg" alt="blogItem Card Js" />
                      <input
                      className="formItems__card__input"
                      id="username"
                      name="username"
                      value={formState.username}
                      onChange={handleChange}
                      placeholder={userData.username}
                      required
                      />
                      <input
                      className="formItems__card__input"
                        id="tagline"
                        name="tagline"
                        value={formState.tagline}
                        onChange={handleChange}
                        placeholder={userData.tagline}
                        required
                      />
                      <textarea
                      className="formItems__card__input"
                        id="bio"
                        name="bio"
                        value={formState.bio}
                        onChange={handleChange}
                        placeholder={userData.bio}
                        required
                      > </textarea>
                      <div className="formItems__card__btnBox">
                        <button 
                        className="formItems__card__btnBox--btn1 btn"
                        type="button"
                        onClick={() => {
                          setFormState(user)
                          userDispatch({type: 'reset'})
                        }}
                        disabled={!isChanged || isPending}
                        >
                        Reset
                        </button>
                        <button 
                        className="formItems__card__btnBox--btn2 btn" 
                        type="submit"
                        disabled={(!isChanged && !isRejected) || isPending}
                        > 
                        {isPending
                        ? '...'
                        : isRejected
                        ? '✖ Try again'
                        : isChanged
                        ? 'Submit'
                        : '✔'}
                        </button>
                        {isRejected ? <pre style={{color: 'red', fontSize: '1.5rem'}}>{error.message}</pre> : null}
                      </div>
                  </form>
                    <div className="formItems__dataDisplay">
                    <p className="formItems__dataDisplay__text"> Type the word: <span style={{color: 'red',}}>badWord </span> </p>
                    <p className="formItems__dataDisplay__text"> in any of the form fields and submit, </p>
                    <p className="formItems__dataDisplay__text"> to create an error. </p>
                    </div>
            </section>
    )

}

export default UserSettings
