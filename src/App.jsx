import { useState, useEffect, useRef } from "react";
import './App.css'
export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const inputRef = useRef();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEnter = () => {
    let newOutput = [
      ...output,
      <br />,
      <p>visitor@Abdullah.net ~ $: {input}</p>,
    ];
    switch (input) {
      case "help":
        newOutput = [
          ...newOutput,
          <p> {">"} List of Available Commands:</p>,
          <p>$ clear = Clear Command Line</p>,
          <p>$ about = About Author</p>,
          <p>$ socials = Links to my socials</p>,
          <p>$ info = Information about this project</p>,
          <p>$ projects = Other projects I have worked on</p>,
          <p>$ upcoming = To see upcoming updates I am currently working on...</p>,
        ];
        break;

        case "Help":
        newOutput = [
          ...newOutput,
          <p> {">"} List of Available Commands:</p>,
          <p>$ clear = Clear Command Line</p>,
          <p>$ about = About Author</p>,
          <p>$ socials = Links to my socials</p>,
          <p>$ info = Information about this project</p>,
          <p>$ projects = Other projects I have worked on</p>,
          <p>$ upcoming = To see upcoming updates I am currently working on...</p>,
        ];
        break;

      case "clear":
        newOutput = [];
        break;

        case "Clear":
        newOutput = [];
        break;

      case "about":
        newOutput = [
          ...newOutput,
          <p> {">"} Hi, my name is Abdullah 👋</p>,
          <p>I am a 3rd Year CS student of Memorial University of Newfoundland 👨‍🏛 </p>,
          <p>I am currently looking for a work term 👨‍💻</p>,
          <p>Type 'socials' to reach me and 'resume' for my complete resume 📫 </p>,
        ];
        break;

        case "About":
        newOutput = [
          ...newOutput,
          <p> {">"} Hi, my name is Abdullah 👋</p>,
          <p>I am a 3rd Year CS student of Memorial University of Newfoundland 👨‍🏛 </p>,
          <p>I am currently looking for a work term 👨‍💻</p>,
          <p>Type 'socials' to reach me and 'resume' for my complete resume 📫 </p>,
        ];
        break;

      case "socials":
        newOutput = [
          ...newOutput,
          <p> {">"} My LinkedIn is: <a href="https://www.linkedin.com/in/abdlaqeel"target="_blank">LinkedIn</a></p>,
          <p> My GitHub is: <a href="https://www.github.com/abdlaqeel"target="_blank">GitHub</a></p>,
         <p> My Resume Link: <a href="https://www.linkedin.com/in/abdlaqeel"target="_blank">Resume</a></p>
        ];
        break;

        case "Socials":
        newOutput = [
          ...newOutput,
          <p> {">"} My LinkedIn is: <a href="https://www.linkedin.com/in/abdlaqeel"target="_blank">LinkedIn</a></p>,
          <p> My GitHub is: <a href="https://www.github.com/abdlaqeel"target="_blank">GitHub</a></p>,
         <p> My Resume Link: <a href="https://www.linkedin.com/in/abdlaqeel"target="_blank">Resume</a></p>
        ];
        break;

        case "Projects":
        newOutput = [
          ...newOutput,
          <p> Some of the projects I have worked on: </p>,
          <p> {">"}<a href="https://github.com/abdlaqeel/MindTheGapGame_Java"target="_blank">Mind the Gap</a></p>,
          <p> {">"}<a href="https://github.com/abdlaqeel/COMP2005-GroupProject"target="_blank">King Domino Game Group Project</a></p>,
         <p> {">"}<a href="https://github.com/abdlaqeel/hangman_python"target="_blank">Hangman</a></p>,
         <p> {">"}<a href="https://github.com/abdlaqeel" target="_blank">My Personal Website</a></p>
        ];
        break;

        case "projects":
        newOutput = [
          ...newOutput,
          <p> Some of the projects I have worked on: </p>,
          <p> {">"}<a href="https://github.com/abdlaqeel/MindTheGapGame_Java"target="_blank">Mind the Gap</a></p>,
          <p> {">"}<a href="https://github.com/abdlaqeel/COMP2005-GroupProject"target="_blank">King Domino Game Group Project</a></p>,
         <p> {">"}<a href="https://github.com/abdlaqeel/hangman_python"target="_blank">Hangman</a></p>,
         <p> {">"}<a href="https://github.com/abdlaqeel" target="_blank">My Personal Website</a></p>
        ];
        break;

        case "info":
            newOutput = [
              ...newOutput,
              <p>I thought about this project once while disabling my Mac's SIP. The terminal is inspired by different resources I found over the internet.</p>,
              <p> This is my first time using ReactJS to create a web application and I plan to add more features on the website as I learn more and more about</p>,
             <p> JavaScript, ReactJS and React</p>,
             ,<br />,
             <p><a href="https://www.github.com/abdlaqeel/abdullahs-terminal" target="_blank">Documentation</a></p>,
            ];
            break;

            case "Info":
            newOutput = [
              ...newOutput,
              <p>I thought about this project once while disabling my Mac's SIP. The terminal is inspired by different resources I found over the internet.</p>,
              <p> This is my first time using ReactJS to create a web application and I plan to add more features on the website as I learn more and more about</p>,
             <p> JavaScript, ReactJS and React</p>,
             ,<br />,
             <p><a href="https://www.github.com/abdlaqeel/abdullahs-terminal"target="_blank">Documentation</a></p>,
            ];
            break;

        case "upcoming":
        newOutput = [
          ...newOutput,
          <br />, <p><h3> {">"} I'm currently working to implement:</h3></p>,
          <p> {"-"}A delayed auto-typer</p>,
          <p> {"-"}UI simulating macOS</p>,
          <p> {"-"}Blinking pointer</p>,
          <p> {"-"}Progress Bar</p>,
          <p> {"-"}Easter Eggs</p>,
        ];
        break;

        case "Upcoming":
        newOutput = [
          ...newOutput,
          <br />, <p><h3> {">"} I'm currently working to implement:</h3></p>,
          <p> {"-"}A delayed auto-typer</p>,
          <p> {"-"}UI simulating macOS</p>,
          <p> {"-"}Blinking pointer</p>,
          <p> {"-"}Progress Bar</p>,
          <p> {"-"}Better Responsiveness</p>,
          <p> {"-"}Easter Eggs</p>,
        ];
        break;

      default:
        newOutput = [...newOutput, <p> {">"} {input} : command not found</p>, <br />];
    }

    setOutput(newOutput);
    setInput("");
  };


  return (
    <div
      className="App"
      onClick={(e) => {
        inputRef.current.focus();
      }}
    >
      <div className="body">
      <h1>{"Welcome to Abdullah's Interactive Terminal. Type 'help' to begin!"} </h1>
        <h3>
          Disclaimer: This project is currently under development and more
          features are being added! 🌱
        </h3>
      </div>
      <br />
      
      version 0.1,  last login: {date}
      <br />
      visitor@Abdullah.net ~ $:
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEnter();
          }
        }}
      />
      <div className="terminal">{output}</div>
    </div>
  );
}
