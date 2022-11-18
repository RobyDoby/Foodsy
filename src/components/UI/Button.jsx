import classes from './Button.module.css';

const Button = props => {
    const btnClass = classes[`${props.className}`] ? 
                    classes[`${props.className}`] : 
                    props.className;
    return <button className={btnClass || `${classes['btn-empty']}`}>{props.children}</button>
}

export default Button;