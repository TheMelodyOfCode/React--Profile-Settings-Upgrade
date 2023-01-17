import { updateUserDocinDB } from './firebase.utils'


const date = new Date();
const dateAndTime = date.toLocaleString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
}); 
const profileUpdated = dateAndTime;

const sleep = t => new Promise(resolve => setTimeout(resolve, t))

const checkOfForbiddenWord = async (user, updates, signal) => {
  await sleep(1000) // simulate a wait period
  if (`${updates.username} ${updates.tagline} ${updates.bio}`.includes('badWord')) {
    return Promise.reject({message: 'No, no , no! ,.. hat is a bad word !'})
  }
  return {...user, ...updates}
}

export const updateUser = async (dispatch, user, updates) => {
  dispatch({type: 'start update', updates})
    
  try {
        const badWord = await checkOfForbiddenWord(user, updates)
        const updatedUser = await updateUserDocinDB({
                        username: updates.username,
                        tagline: updates.tagline,
                        bio: updates.bio,
                        profileUpdated: profileUpdated,
                        })

        dispatch({type: 'finish update', updatedUser})
        return {...badWord, ...updatedUser}

  } catch (error) {
    dispatch({type: 'fail update', error})
    throw error
  }

}
