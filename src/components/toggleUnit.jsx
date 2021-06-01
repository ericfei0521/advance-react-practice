import { useState, useEffect, createContext, useContext } from "react";
import Switch from "./toggleSwitch";

//build an context for further sharing the value
const ToggleContext = createContext();

const Toggle = (props) => {
    console.log(props);
    const [on, setOn] = useState(props.toggled);
    function toggle() {
        setOn(!on);
        props.switchBackground();
    }
    useEffect(() => {
        console.log(on);
    }, [on]);
    return <ToggleContext.Provider value={{ on, toggle }}>{props.children}</ToggleContext.Provider>;
};

function On({ children }) {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
}
Toggle.On = On;

function Off({ children }) {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
}

Toggle.Off = Off;

const Button = () => {
    const { on, toggle } = useContext(ToggleContext);
    return <Switch toggled={on} onChange={toggle} />;
};
Toggle.Button = Button;
export default Toggle;
