import { createContext, useContext, useState } from "react";

const Notification = ({ message, severity, tipe, exitClick }) => {
    //message recibe el mensaje, severity recibe success, danger, warning o default, tipe recibe alert o notification
    //Los estilos se definieron en App.css

    if (message === "") {
        return;
    } else if (tipe === "alert") {
        return (
            <div className={`alertNotification ${severity}`} >
                <p>{message}</p>

                <div>
                    <button onClick={exitClick}>Ok</button>
                </div>

            </div>
        )
    } else {
        return (
            <div className={`notification ${severity}`}>
                <p>{message}</p>
            </div>
        )
    }

}

export const NotifiNdAlert = createContext();

export const NotifiNdAlertProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");
    const [tipe, setTipe] = useState("")


    const exitClick = () => {
        setMessage("")
    }


    const setNotification = (msg, sev, tip) => {
        setMessage(msg);
        setSeverity(sev);
        setTipe(tip);
        setTimeout(() => {
            setMessage("")
        }, 3000)
    }

    const setAlert = (msg, sev, tip) => {
        setMessage(msg);
        setSeverity(sev);
        setTipe(tip);
    }




    return (
        <NotifiNdAlert.Provider value={{ setNotification, setAlert }}>
            <Notification message={message} severity={severity} tipe={tipe} exitClick={exitClick} />
            {children}
        </NotifiNdAlert.Provider>
    )


}

export const useNotifiNdAlert = () => {
    return useContext(NotifiNdAlert)
}