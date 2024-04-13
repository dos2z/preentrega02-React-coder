import { useState, useEffect } from "react";

export const useAsync = (asyncFn, dependencies = []) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        setLoading(true)
        

        asyncFn()
            .then((response) => {
                setData(response);
                
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => { setLoading(false) })
    }, dependencies);

    return {
        data,
        error,
        loading,
        
    }
}


