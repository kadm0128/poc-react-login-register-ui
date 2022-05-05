import React, { useRef, useState } from "react";
import "./App.scss";
import { Login, Register } from "./components/login";

type Props = {
    text: string;
    divRef: React.MutableRefObject<null>;
    changeCurrentScreen: () => void;
}

const RightSide = (props: Props) => {
    return (
        <div className="right-side right" onClick={props.changeCurrentScreen} ref={props.divRef}>
            <div className="inner-container">
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

function App() {
    const divElementRef: any = useRef(null);
    const [isLogginActive, setisLogginActive] = useState(true);

    const getText = () => {
        if (isLogginActive) {
            return "Register"
        }

        return "Login"
    }

    const changeCurrentScreen = () => {
        if (divElementRef && divElementRef.current) {
            if (isLogginActive) {
                divElementRef.current.classList.remove("right");
                divElementRef.current.classList.add("left");
            } else {
                divElementRef.current.classList.remove("left");
                divElementRef.current.classList.add("right");
            }
        }

        setisLogginActive((prevState) => (!prevState))
    }

    return (
        <div className="app">
            <div className="login">
                <div className="container">{isLogginActive ? <Login /> : <Register />}</div>
                <RightSide text={getText()} changeCurrentScreen={changeCurrentScreen} divRef={divElementRef} />
            </div>
        </div>
    );
}

export default App;
