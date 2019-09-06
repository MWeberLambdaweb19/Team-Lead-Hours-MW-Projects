import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // First, we need to create state to store value
    // Then, we need to pass initial state function to useState so logic is only executed once

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}




// DIFFERENT TYPES OF EXPORTS

// export {useLocalStorage}

// import {useLocalStorage} from './useLocalStorage.js'

// export default useLocalStorage

// import useLocalStorage from './useLocalStorage.js'