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
      case "ls":
        newOutput = [
          ...newOutput,
          <p> {">"} List of Available Commands:</p>,
          <p>$ clear = Clear Command Line</p>,
          <p>$ about = About Author</p>,
          <p>$ socials = Links to my socials</p>,
          <p>$ info = Information about this project</p>,
          <p>$ upcoming = To see upcoming updates I am currently working on...</p>,
        ];
        break;

      case "clear":
        newOutput = [];
        break;
      case "about":
        newOutput = [
          ...newOutput,
          <p> {">"} Hi, my name is Abdullah 👋</p>,
          <p>I am a 3rd Year student of Memorial University of Newfoundland 👨‍🏛 </p>,
          <p>I am currently looking for a work term 👨‍💻</p>,
          <p>Type 'socials' to reach me and 'resume' for my complete resume 📫 </p>,
        ];
        break;

      case "socials":
        newOutput = [
          ...newOutput,
          <p> {">"} My LinkedIn is: <a href="linkedin.com/in/abdlaqeel">LinkedIn</a></p>,
          <p> My GitHub is: <a href="https://www.github.com/abdlaqeel">GitHub</a></p>,
         <p> My Resume Link: <a href="linkedin.com/in/abdlaqeel">Resume</a></p>
        ];
        break;

        case "Socials":
        newOutput = [
          ...newOutput,
          <p> {">"} My LinkedIn is: <a href="linkedin.com/in/abdlaqeel">LinkedIn</a></p>,
          <p> My GitHub is: <a href="https://www.github.com/abdlaqeel">GitHub</a></p>,
         <p> My Resume Link: <a href="linkedin.com/in/abdlaqeel">Resume</a></p>
        ];
        break;

        case "info":
            newOutput = [
              ...newOutput,
              <p>I thought about this project once while disabling my Mac's SIP. The terminal is inspired by different resources I found over the internet.</p>,
              <p> This is my first time using ReactJS to create a web application and I plan to add more features on the website as I learn more and more about</p>,
             <p> JavaScript, ReactJS and React</p>
            ];
            break;

        case "upcoming":
        newOutput = [
          ...newOutput,
          <p> {">"} I'm currently working to implement:</p>,
          <p> {"-"}A delayed auto-typer</p>,
          <p> {"-"}UI simulating macOS</p>,
          <p> {"-"}Blinking pointer</p>,
          <p> {"-"}Progress Bar</p>,
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
      <h1>{"Welcome to Abdullah's Interactive Terminal. Type 'ls' to begin!"} </h1>
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
