import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Counter from "./Count";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  const actors = ['sakib khan','raj','bappa raj','rubel','josim'];
  const singer=[
    {id:1,name: ' Dr. mahfujur rahman',age:60},
    {id:2,name: 'Eva rahman',age:40},
    {id:3,name: 'shubvro deb',age:30},
    {id:4,name: 'pritom',age:32},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* {
        singer.map(singer=> <Singer singer={singer} ></Singer>)
      }
      <Actor name={"tanver"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
        
      } */}
      {/* <Todo
       task="learn React"
        isDone={true}></Todo>
      <Todo 
      task="Explore Core Concept" 
      isDone={false}></Todo>
      <Todo 
      task="Try JSX"
       isDone={true}></Todo> */}
      {/* <Device name="laptop" price="40000"></Device>
      <Device name="mobile" price="70000"></Device>
      <Device name="iphone" price="170000"></Device>
      <Device name="airbuds" price="16000"></Device>
      <Person></Person>
      <Hello></Hello>
      <Student grade="7" score="88"></Student>
      <Student grade={45} score="90"></Student>
      <Student grade="7" score="88"></Student>
      <Student  ></Student> */}
    </>
  );
}

function Device(props){
  console.log(props);
  
  return <h2>This is device : {props.name} price: {props.price}</h2>
}

function Hello() {
  

  return <h2>hi there</h2>;
}
function Person() {
  const age= 30;
  const person = {name: 'tanver',age: 12}
  const money= 6000;
  return <h3>hello i am {person.name} with age : {age+money}</h3>;
}

const {grade ,score}={grade: '7',score:'99'};

function Student({grade=1,score=0}){
  // console.log(grade,score);
  
  return <div className='student'>
    <h3>this is a student</h3>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
  </div>
}
export default App;
