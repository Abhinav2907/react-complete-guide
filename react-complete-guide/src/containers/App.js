import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {id: 'sgbd', name: 'Abhinav', age: 20},
      {id: 'rjyg', name: 'Sasha', age: 20},
      {id: 'uygf', name: 'Killua', age: 19}
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

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });
    const person = {...this.state.persons[personIndex]}; //or we can use object.assign
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons=this.state.persons.splice();//splice so that a new copy of array is created
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

//more effecient using bind
  render() {

    let personww = null;
    let btnClass = '';

    if(this.state.showPersons)
    {
      personww = (
        // <div>
        //     <button 
        //       style={style}
        //       onClick={() => this.switchNameHandler('Abhinav Mishra')}>Switch</button>
        //     <Person 
        //       name={this.state.persons[0].name} 
        //       age={this.state.persons[0].age}
        //       changed={this.nameChangedHandler}/>
        //     <Person 
        //       name={this.state.persons[1].name} 
        //       age={this.state.persons[1].age}
        //       click={this.switchNameHandler.bind(this,'Abhinav Mishra!@!@!')}>
        //         My hobby : Playing guitar
        //     </Person>
        //   </div>
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
      )
      btnClass = classes.Red;
    }
    const assignedClasses = []
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <=1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
          <h1>"Hi, I am react app.."</h1>
          <p className={assignedClasses.join(' ')}>Works</p>
          <button 
            className={btnClass}
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