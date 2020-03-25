import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Mustard', type: 'mustard'},
    {label: 'Mayonaisse', type: 'mayo'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'AalooPatty', type: 'aaloo'},
    {label: 'MeatPatty', type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
);

export default buildControls;