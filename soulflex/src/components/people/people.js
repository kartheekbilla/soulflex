





import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import soullogo from '../img/soulflexlogo.png'; // Ensure this path is correct

const WorkshopPage = () => {
  useEffect(() => {
    if (!document.querySelector(".workshop-container")) {
      // Create the main container
      const container = document.createElement("div");
      container.className = "workshop-container";

      // Create header with animation
      const header = document.createElement("h1");
      header.innerText = "Journey to a Peaceful Mind 🌟";
      header.className = "header-animate";
      container.appendChild(header);

      // Create description paragraph
      const description = document.createElement("p");
      description.innerText =
        "Join our transformative online workshop designed to bring serenity and balance to your life. Together, we explore techniques that help you grow beyond stress and discomfort.";
      container.appendChild(description);

      // Create interactive sessions section
      const interactiveSessions = document.createElement("p");
      interactiveSessions.innerText =
        "Engage in live, interactive sessions, connect with like-minded souls, and cultivate inner peace. Be part of this uplifting journey.";
      container.appendChild(interactiveSessions);

      // Create registration button with additional animation
      const registerButton = document.createElement("button");
      registerButton.className = "register-button";
      registerButton.innerText = "Embark on the Journey";
      registerButton.onclick = function () {
        window.location.href = "/register"; // Redirect to registration page
      };
      container.appendChild(registerButton);

      // Append the container to the body
      document.body.appendChild(container);

      // Add styles and animations
      const style = document.createElement("style");
      style.innerHTML = `
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f0f4f8;
                margin: 0;
                padding: 0;
                text-align: center;
                overflow: hidden;
            }

            .workshop-container {
                margin: 60px auto;
                padding: 30px;
                background-color: #fff;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                max-width: 800px;
                border-radius: 15px;
                animation: fadeIn 2s ease-in-out;
                position: relative;
                z-index: 2;
            }

            h1 {
                font-size: 42px;
                color: white;
                margin-bottom: 20px;
                animation: slideIn 1s ease-in-out;
            }

            p {
                font-size: 20px;
                color: #555;
                line-height: 1.8;
                margin-bottom: 25px;
                animation: fadeText 1.5s ease-in;
            }

            .register-button {
                background-color: #007BFF;
                color: #fff;
                border: none;
                padding: 15px 40px;
                font-size: 20px;
                border-radius: 50px;
                cursor: pointer;
                transition: background-color 0.3s ease, transform 0.3s ease;
                animation: pulse 1.5s infinite;
            }

            .register-button:hover {
                background-color: #0056b3;
                transform: scale(1.1);
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideIn {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
            }

            @keyframes fadeText {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }

            /* Background bubbles */
            .bubble {
                position: absolute;
                background-color: rgba(0, 123, 255, 0.2);
                border-radius: 50%;
                opacity: 0.8;
                animation: moveBubbles 10s infinite linear;
            }

            .bubble1 {
                width: 150px;
                height: 150px;
                bottom: 5%;
                left: 10%;
                animation-delay: 2s;
            }

            .bubble2 {
                width: 100px;
                height: 100px;
                top: 20%;
                right: 15%;
            }

            .bubble3 {
                width: 120px;
                height: 120px;
                bottom: 10%;
                right: 20%;
                animation-delay: 4s;
            }

            @keyframes moveBubbles {
                0% { transform: translateY(0); }
                100% { transform: translateY(-1000px) translateX(200px); }
            }
        `;
      document.head.appendChild(style);

      // Add bubbles to the background
      const bubble1 = document.createElement("div");
      bubble1.className = "bubble bubble1";
      document.body.appendChild(bubble1);

      const bubble2 = document.createElement("div");
      bubble2.className = "bubble bubble2";
      document.body.appendChild(bubble2);

      const bubble3 = document.createElement("div");
      bubble3.className = "bubble bubble3";
      document.body.appendChild(bubble3);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#000",
          color: "#fff",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 999,
        }}
      >

<Flex alignItems="center">
            <Image
              src={soullogo}// Update the path to your logo image
              alt="Soul Flex Logo"
              boxSize="70px" // Adjust the size as needed
              mr={4}
            />
            <Heading as="h1" size="lg" fontFamily="lucida">
              Soul Flex
            </Heading>
          </Flex>
        
      </motion.div>
<br></br><br></br>
      {/* The rest of your component's content */}
      <div id="workshop-content">
        
      </div>
    </>
  );
};

export default WorkshopPage;
