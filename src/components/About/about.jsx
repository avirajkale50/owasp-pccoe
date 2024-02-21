import React, { useState, useEffect } from "react";
import "./about.css";

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

const upevent = () => {
  return (
    <section id="About">
      
    <div className="about__container">
        <div className="about__body">
            <div className="about__row">
                <div className="about__col">
                  <div className="about__head">
                    <TypingText  text="ABOUT EVENT" />
                    </div>
                    <iframe className="remp" width="550" height="400" src="https://www.youtube.com/embed/vDHfSApQX9U?si=LXWBUIckzQtvoLkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="about__col">
                    <div className="textbox">
                    <h2>Short Description</h2>
                    <p>The CyberKavach event is a crucial initiative that aligns with October's Cyber Awareness Month, an annual observance dedicated to promoting cybersecurity awareness and education. This event serves as a proactive shield against the rising tide of cyber threats and vulnerabilities. It engages individuals, businesses, and organizations in a concerted effort to enhance their digital defenses. Through workshops, seminars, and online campaigns, CyberKavach aims to empower people with the knowledge and tools needed to protect themselves and their digital assets from cyberattacks. In a world increasingly reliant on technology, events like CyberKavach play a pivotal role in ensuring a safer, more secure cyber landscape for all.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>   
<div className="about__space"></div>

      
    
    </section>
  );
};
export default upevent; 