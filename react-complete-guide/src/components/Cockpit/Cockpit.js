import React, {useEffect , useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    
    const authContextvar = useContext(AuthContext);
    
    useEffect( () => {
        console.log("Useeffect triggered");
        // setTimeout(()=> {
        //     alert("Saved to cloud!!");
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log("cleanup");
        };
    }, []);

    const assignedClasses = []
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red)
    }
    if(props.personsLength <=1) {
      assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Works</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                    Disp
            </button>
            {<button onClick={authContextvar.login}>LOGIN</button>}
        </div>
    );
};

export default React.memo(cockpit);