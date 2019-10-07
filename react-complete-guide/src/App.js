import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Abhinav', age: 20},
      {name: 'Sasha', age: 20}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: 'Sasha Tripathi', age: 20}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 20},
        {name: 'Sasha Tripathi', age: 20}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

//more effecient using bind
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px'
    };

    let personww = null;

    if(this.state.showPersons)
    {
      personww = (
        <div>
            <button 
              style={style}
              onClick={() => this.switchNameHandler('Abhinav Mishra')}>Switch</button>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              changed={this.nameChangedHandler}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'Abhinav Mishra!@!@!')}>
                My hobby : Playing guitar
            </Person>
          </div>
      )
    }

    return (
     <div className="App">
       <h1>"Hi, I am react app.."</h1>
       <button 
        style={style}
        onClick={this.togglePersonsHandler}>Disp</button>
       {personww}
     </div>
    );//can also use ternary operator as we can only write a single statement in jsx block. Module 4 vid 3
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'HI i am react app!!!'));
  }
}

export default App;

//  //using hooksXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const app = props =>{
//   const [personsState, setPersonsState] = useState({
//     persons: [//for each object use different useState hook. Watch video 20 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//         {name: 'Abhinav', age: 20},
//         {name: 'Sasha', age: 20}
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//           {name: 'Abhinav Mishra', age: 20},
//           {name: 'Sasha Tripathi', age: 20}
//       ]
//     });
//   };

//   return (
//          <div className="App">
//            <h1>"Hi, I am react app.."</h1>
//            <button onClick={switchNameHandler}>Switch</button>
//            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby : Playing guitar</Person>
//          </div>
//         );
  
// }

// export default app;