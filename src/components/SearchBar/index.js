import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import './style.css';

const SearchBar = (props) => {
    return <header>
            <div className="search">
                  <input  type = "text"
                          maxLength = "100"
                          id = "searchText"
                          placeholder = "Search Text"
                          onKeyDown = {e=>{ if(e.keyCode === 13) props.searchText(); }}
                          value={props.searchString}
                          onChange={e=>props.setSearchString(e.target.value)} />
                          
                  <button onClick={() =>{ props.searchText(); }}>
                    <SearchOutlined />
                  </button>
            </div>
                {props.children}
            </header>
    
}

export default SearchBar