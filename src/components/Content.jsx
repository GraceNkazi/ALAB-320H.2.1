
import classes from 'prop-types';

function Content(props) {
    return (<p style={{color: props.color}}>{props.text}</p>);
  }

  export default Content