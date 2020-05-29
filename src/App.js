import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const callAPI = async () => {
    return Promise.resolve("Hello from Steezy 👋");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await callAPI();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
    </div>
  );
};

export default App;
