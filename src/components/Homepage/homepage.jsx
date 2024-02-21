import React ,{ useState, useEffect }from 'react'
import IMG from '../../assets/main.png'
import IMG1 from '../../assets/name__logo1.png'
import './homepage.css'
import Fade from 'react-reveal/Fade';




const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [typingDirection, setTypingDirection] = useState("forward");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (typingDirection === "forward") {
          if (currentIndex < text.length) {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else {
            setTypingDirection("backward"); // Switch to erasing
          }
        } else if (typingDirection === "backward") {
          if (currentIndex > 1) {
            setDisplayText((prevText) => prevText.slice(0, -1)); // Erase one character
            setCurrentIndex((prevIndex) => prevIndex - 1);
          } else {
            setTypingDirection("forward"); // Switch back to typing
          }
        }
      }, 100); // Adjust the typing speed (milliseconds per character)
    };

    startTyping(); // Start the initial typing animation

    return () => {
      clearInterval(typingInterval); // Cleanup when component unmounts
    };
  }, [text, currentIndex, typingDirection]);

  return <h2>{displayText}</h2>;
};


//section for typing eefect ends here

const Homepage = () => {
  return (
<section  id='Home'>
  <div id="content">
    <div className="container">
        <div className="mainbody">
            <div className="mainrow">
                <div className="maincol">
                <Fade left>
                 <img className="logo__name"src={IMG1} alt="namelogo"/><br /><br />
                 <TypingText text="ASURAS on the cyberspace is not a MYTH !!" /><br />
                  <p>Cybersecurity is the practice of safeguarding digital systems, networks, and data from unauthorized access, attacks, and breaches. It involves implementing robust measures, such as firewalls, encryption, and user authentication, to protect against cyber threats, ensuring the confidentiality, integrity, and availability of information.</p>
                  </Fade>
                </div>
             
              
                <div className="maincol">
                <div className="animate">
                    <Fade right>
                      <img src={IMG} className='logo__main' alt="mainimage"/>
                    </Fade>
                    </div>
                </div>
               
            </div>
            </div>
            </div>   
    <div className='main_space'>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;Are You Safe or Hacked?????&nbsp;&nbsp;&nbsp;&nbsp;</p>
    <button onClick={()=>{ alert('Nahh, OWASP PCCoE chapter, Will protect you from CyberCrimes'); }}>Check</button>
    </div>
    </div>
    
    </section>
  )
}

export default Homepage

