import react from 'react';
import classes from './BurgerIngredients';

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div classes={classes.Seeds1}></div>
                    <div classes={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('patty'):
            ingredient = <div className={classes.AalooPatty}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('mustard'):
            ingredient = <div className={classes.Mustard}></div>;
            break;
        case ('mayonaisse'):
            ingredient = <div className={classes.Mayonaisse}></div>;
            break;
        default:
            ingredient = null;
    };
    return ingredient;
};

export default BurgerIngredient;