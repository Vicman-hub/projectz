import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';


import "./App.css";
import React, { useState, useEffect } from "react";


export const App = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  // used async function
  const fetchInfo = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);

    // return fetch(url)
    //   .then((res) => res.json())
    //   .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App"  >
 <BrowserRouter >
 <Routes>
 <Route exact path= '' element={<Home/>} />
 

 </Routes>
 </BrowserRouter>

      <div style={{ backgroundColor: "pink", 
             display: "flex",
             flexWrap: "wrap",
             justifyContent: "center",
             gap: "15px",
      }} >

          {data.map((item) => (
              <div
              key={item.id}
                style={{
                  width: "30%",
                  maxWidth: "300px",
                  height: "300px",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                  marginBlock: 10,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}  >
             <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h2 style={{ fontSize: "16px", color: "#333", marginTop: "10px" }}>
              {item.title}
            </h2>   
          </div>
           
          ))}
       
      </div>
    </div>
  );
};

export default App

