/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
const Button = (props) => (
  <button
    id={props.id}
    className={props.className}
    onClick={props.handleChange}
    name={props.name}
  >
    {props.name}
  </button>
);

Button.defaultProps = {
  type: 'button',

  disabled: false,
};

export default Button;
