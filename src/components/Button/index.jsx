function Button({ text, type, clickFunction }) {
    const handleClick = () => {
        clickFunction();
    }
    const getType = () => {
        switch (type) {
            case "info":
                return "btn-info";
            case "success":
                return "btn-success";
            case "danger":
                return "btn-danger";
            case "warning":
                return "btn-warning";
            case "primary":
                return "btn-primary";
        }
    }
    return (
        <button
            className={`btn-custom ${getType()}`}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button;