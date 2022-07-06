import React,{useState,useEffect} from "react";
import { Provider, teamsTheme, Menu } from '@fluentui/react-northstar';
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import {GlobalStyle} from './Styled'
import Settings from "./components/Settings/Settings";
import {Data} from './components/store/interfaces'
import { Dummy } from './components/store/Dummy'
const App: React.FC =  () => {
 
  const [title,setTitle] = useState<string>("")
  const [data, setData] = useState<Array<Data>>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      setData([...data, { title, id: Date.now()}]);
    }
    localStorage.setItem("Data", JSON.stringify(data));
  };
  
 
  return (
    <>
      <GlobalStyle />
      <Navbar data={data} />
      <Routes>
        <Route path="/settings" element={
          <Settings handleAdd={handleAdd} title={title} setTitle={setTitle} setData={setData} />
        } />
      </Routes>
    </>
  )
};

export default App;