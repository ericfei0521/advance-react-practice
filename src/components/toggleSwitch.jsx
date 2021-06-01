import styled from "styled-components";
const Button = styled.button`
    width: 65px;
    height: 65px;
    box-sizing: border-box;
    border-radius: 50%;
    border: none;
    transition: 0.5s;
    background-color: ${(props) => props.theme};
    box-shadow: 0 0 10px gray;
`;
const Switch = ({ className, toggled, onChange }) => {
    return (
        <div className={className} onClick={onChange}>
            <Button
                className={`toggle-button ${toggled ? "toggle-on" : ""}`}
                theme={toggled ? "black" : "gray"}
            ></Button>
        </div>
    );
};

export default styled(Switch)`
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 180px;
    height: 70px;
    margin: 0 auto;
    transform: translateY(-50%);
    border: 2px solid gray;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 5px;
    .toggle-on {
        transform: translateX(110px);
        transition: 0.5s;
    }
    box-shadow: 0 0 10px gray;
`;
