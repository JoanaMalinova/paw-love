import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {   
    
    const stringifiedState = localStorage.getItem(key);
    const [state, setState] = useState(initialValue);

    useEffect(() => {      

        if (stringifiedState) {
            const persistedState = JSON.parse(stringifiedState);
            setState(persistedState);
        }
       
    }, [stringifiedState])

    const setLocalStorageState = (value) => {

        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [state, setLocalStorageState];
}