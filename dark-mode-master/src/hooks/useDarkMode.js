import { useEffect } from 'react'; 
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [darkModeClass, setDarkModeClass] = useLocalStorage('dark-mode-enabled');

    useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;
        if (darkModeClass) {
            element.classList.add(className)
        } else {
            element.classList.remove(className)
        }
    },
    [darkModeClass]
    );

    return [darkModeClass, setDarkModeClass];
};