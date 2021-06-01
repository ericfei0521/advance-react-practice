import { useState } from "react";
import Toggle from "./components/toggleUnit";
import styled from "styled-components";
import sun from "./images/sun.png";
import moon from "./images/moon.png";

const Container = styled.div`
    height: 100vh;
    transition: background-color 300ms linear;
    padding: 1em;
    background-color: ${(props) => (props.darkMode ? "#222" : "white")};
    display: flex;
    img {
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
`;
function App() {
    const [isToggled, setIsToggled] = useState(false);
    const switchBackground = () => {
        setIsToggled(!isToggled);
    };
    return (
        <Container darkMode={isToggled}>
            <Toggle onToggle={(on) => console.log(on)} switchBackground={switchBackground}>
                <Toggle.On>
                    <img src={moon} alt="" />
                </Toggle.On>
                <Toggle.Off>
                    <img src={sun} alt="" />
                </Toggle.Off>
                <Toggle.Button />
            </Toggle>
        </Container>
    );
}

export default App;
