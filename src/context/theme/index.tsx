import { createContext } from 'react'

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface StationTheme {
    background: string;
    font: string;
    textStyle: { [key: string]: string };
    artStyle: { [key: string]: string };
}

const ThemeDefault: StationTheme = {
    background: 'rgb(39, 55, 70)', 
    font: 'Dosis',
    textStyle: {
        fontFamily: 'Dosis',
        color: '#ffffff',
    },
    artStyle: {
        width: '200px', 
        height: '200px',
        borderRadius: '2px',
    },
};


export const ThemeContext = createContext<StationTheme>(ThemeDefault);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={ThemeDefault}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
