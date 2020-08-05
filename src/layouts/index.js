import React from "react"
import Navigation from "../components/navigation/navigation";
import GlobalStyles from '../assets/GlobalStyles/globalStyles';



const Layout = ({children}) => (
    <>
        <GlobalStyles/>
        <Navigation/>
        {children}
    </>
)

export default Layout
