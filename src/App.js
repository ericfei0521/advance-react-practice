import { useState } from "react";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    transition: background-color 300ms linear;
    padding: 1em;
    background-color: ${(props) => (props.darkMode ? "#222" : "white")};
`;
function App() {
    const [isToggled, setIsToggled] = useState(false);
    const switchBackground = () => {
        setIsToggled(!isToggled);
    };
    return (
        <Container darkMode={isToggled}>
            <Toggle toggled={isToggled} onChange={switchBackground} />
        </Container>
    );
}

export default App;
