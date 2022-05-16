function Button({name, type, children, version }) {

    return (
        <button
            type={type}
            name={name}
            className={`btn-${version}`}>
            {children}
        </button>
    );
}

export default Button;