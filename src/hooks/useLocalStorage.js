import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  
    const [state, setState] = useState(() => {
        const stringifiedState = localStorage.getItem(key);
        
        if (stringifiedState) {
            const persistedState = JSON.parse(stringifiedState);
            return persistedState;
        }
        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [state, setLocalStorageState];
}