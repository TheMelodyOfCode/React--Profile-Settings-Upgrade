import * as React from 'react'

const FormItems =()=>{


    return (
    <section className="formItems">          
                <form className="formItems__card">
                    <img className="formItems__card__img" src="img/uploadProfilePic.jpg" alt="blogItem Card Js" />
                      <input
                      className="formItems__card__input"
                        id="username"
                        name="username"
                        placeholder="Username"
                      />
                      <input
                      className="formItems__card__input"
                        id="tagline"
                        name="tagline"
                        placeholder="Tagline"
                      />
                      <textarea
                      className="formItems__card__input"
                        id="bio"
                        name="bio"
                        placeholder="Biography"
                      > </textarea>
                      <div className="formItems__card__btnBox">
                        <button className="formItems__card__btnBox--btn1 btn"type="button">Reset</button>
                        <button className="formItems__card__btnBox--btn2 btn" type="submit"> ✔ </button>
                      </div>
                  </form>
                    <div className="formItems__dataDisplay">
                        <p className="formItems__dataDisplay__text">
                                "username": "jakiechan",
                                "tagline": "yes!",
                                "bio": "super"
                        </p>
                    </div>
            </section>
    )

}

export default FormItems
