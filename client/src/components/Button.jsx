import "./Button.css";

const Button = ({children, ...props}) => {
    const onSubmit = () => {
    }
    return (
        <button onClick={onSubmit}>
            {children}
        </button>
    )
}

export default Button;
