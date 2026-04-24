import React from 'react';
import { ThemeProvider } from "next-themes";


const Nextthemprovider = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </div>
    );
};

export default Nextthemprovider;