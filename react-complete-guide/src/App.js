import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let personww = null;

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
          {this.state.persons.map((personas,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={personas.name}
              age={personas.age}
              key={personas.id}
              changed={(event) => this.nameChangedHandler(event, personas.id)} />
          })}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <=1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>"Hi, I am react app.."</h1>
          <p className={classes.join(' ')}>Works</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Disp</button>
          {personww}
        </div>
      </StyleRoot>
    );//can also use ternary operator as we can only write a single statement in jsx block. Module 4 vid 3
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'HI i am react app!!!'));
  }
}

export default Radium(App);

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