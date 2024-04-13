import "./UserWidgetDropdown.css"
import React, { useEffect } from 'react'
import { Link } from 'React-router-dom'
import { authentication } from "../../../../services/firebase/Auth"
import { useUserContext } from "../../../../context/UserContext"


const UserWidgetDropdown = () => {
    const { userName, setUserName, setUser } = useUserContext()
    const { runSingInGoogle, success, userAuth, exitSesion } = authentication()

    useEffect(() => {
        if (success) {
            setUser(userAuth)
            setUserName(userAuth.displayName)
        } else {
            setUser(userAuth)
            setUserName("")
        };
    }, [success])

 


    if (userName) {
        return (
            <div className='UserWidgetDropdownLogIn'>
                <ul>
                    <li onClick={exitSesion}>Cerrar Sesión</li>
                </ul>
            </div>
        )
    }

    return (
        <div className='UserWidgetDropdownLogIn'>
            <ul>
                <li onClick={runSingInGoogle}>Iniciar Sesión con Google</li>
            </ul>
        </div>
    )
}

export default UserWidgetDropdown