
import './App.css';
import Api from './Components/Api';
import Navbar from './Components/Navbar/Navbar';
import Cart from'./Components/Cart';
import { Search } from './Components/search/Search';
import { useState } from 'react';
import dataList from './db/data.json';


function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
console.log(data)
  // exclude column list from filter
  const excludeColumns = ["id"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <div className="App">
        Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return <div key={i} className="box" >
            <img src={d.img} />
            <b>Name: </b>{d.title}<br />
            <b>Year: </b>{d.year}<br />
            <b>Cast: </b>{d.cast}<br />
            <b>Rating: </b>{d.rating}<br />
            <b>Overview: </b>{d.Description}
          </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
    </div>
  );
}

export default App;
