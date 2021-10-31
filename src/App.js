import React,{useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import './App.css';
import 'antd/dist/antd.css';
import { message } from 'antd';
import News from "./pages/News";
import Home from "./pages/Home";

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [page, setPage] = useState('Home');
  const [state, setState] = useState(false);

  useEffect(() => {

  }, [page]);

    const searchText =()=>{
      if(!searchString){
        message.error('Search text is required');
        return;
      }
       
      if(!searchString || searchString.length<2){
        message.error('Search text  must be at least two characters');
        return;
      }
        
      setState(!state)
        
    }

    const status = () =>{
      switch (page) {
        case 'News':
          return <News 
                    searchString={searchString}
                    state={state} />
      
        default:
          return <Home
                    searchString={searchString}
                    state={state}
                    setSearchString={(val)=>{setSearchString(val);searchText()}} />
      }
    }

    return <div className="App">
              <h2> Search App</h2>
              <SearchBar 
                searchString = {searchString}
                setSearchString = {(val)=>setSearchString(val)}
                searchText = {searchText}>
                  <div className="selector">
                    <a className={"page",page==="Home"?"act":null}
                      onClick={e=>{e.preventDefault();setPage('Home')}} >
                      Home
                    </a>
                    <a className={"page",page==="News"?"act":null}
                      onClick={e=>{e.preventDefault();setPage('News')}}>
                      News
                    </a>
                  </div>
              </SearchBar>
              {status()}
            </div>
    
}

export default App;
