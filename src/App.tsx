import React,{useState,useContext} from "react";
import { Provider, teamsTheme, Menu } from '@fluentui/react-northstar';
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import {GlobalStyle} from './Styled'
import Settings from "./components/Settings/Settings";
import {Data} from './components/store/interfaces'

const App: React.FC =  () => {
 
  const [data, setData] = useState<string>("");
  
  return (
    <>
      <GlobalStyle />
      <Navbar  data={data}/>
      <Routes>
        <Route path="/settings" element={
          <Settings data={data} setData={setData} />
        } />
      </Routes>
    </>
  )
};

export default App;