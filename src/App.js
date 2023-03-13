import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Toggler from "./Toggler";
import Theme from "./Theme";
import { useState } from "react";
const GlobalStyles=createGlobalStyle`
body
{
background-color:${props =>props.darkMode?"#334":"#eef"};
color:${props=>props.darkMode?"#eee":"#222"};
}
`;
function App(){
  const [darkMode,setdarkMode]=useState(false);
  return(
    <div>
    <Theme.Provider value={{darkMode,setdarkMode}}>
    <GlobalStyles darkMode={darkMode} />
    <h1>Dark Mode</h1>
<Toggler />
    </Theme.Provider>
    </div>
  );
}
export default App;