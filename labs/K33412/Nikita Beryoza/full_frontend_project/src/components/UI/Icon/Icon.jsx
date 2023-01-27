const Icon = ({icon, classes}) => {
    return (
        <span className={'icon ' + classes}>
            {icon}
        </span>
    );
};

export default Icon;

