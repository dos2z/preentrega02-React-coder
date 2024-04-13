import { createContext, useContext, useEffect, useState } from "react"
import { authentication } from "../services/firebase/Auth"



export const userContext = createContext()

export const UserProvider = ({ children }) => {
    const { userAuth, success, signOutState } = authentication()
    const [user, setUser] = useState("")
    const [userName, setUserName] = useState("");

  

    useEffect(() => {
        if (success) {
          setUser(userAuth)
          setUserName(userAuth.displayName) 
        };
      }, [success])
      useEffect(()=>{
        setUser(userAuth)
        setUserName("")
      },[signOutState])


    return (
        <userContext.Provider value={
            {
                user,
                setUser,
                userName,
                setUserName
            }
        }>
            {children}
        </userContext.Provider>

    )

}

export const useUserContext = () => {
    return useContext(userContext)
}