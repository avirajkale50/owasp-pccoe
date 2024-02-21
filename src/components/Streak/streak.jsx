import React from 'react'
import "./streak.css"
import Zoom from 'react-reveal/Zoom';


const streak = () => {
  return (
    <div>
    <div className="streak__container">
        <div className="streak__body">
            <div className="streak__row">
                <div className="streak__col">
                    <h1>Daily Streak</h1>
                <Zoom>
                    <p>
                🔒 Elevate Your Cybersecurity: October Challenge! 🌟<br/>

                🚀 Daily cybersecurity insights, skill tests, and prizes await. <br />

                📅 October 12st - 31st <br/>
                💻 Join us online <br/>

                Are you ready to strengthen your digital defense? 💪🔐 #CybersecurityChalleng
                e</p>
                    </Zoom>
                </div>
                <div className='streak__col'>
                <a href="http://form-timer.com/start/d1857947" target="_blank" rel="noreferrer">Go For It</a>
                </div>
            </div>
          </div>
        </div>   
    </div>
    
  )
}

export default streak
