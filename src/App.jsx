import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Home from './components/HomePage/Home';
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Home />
                </div>
            </Router>
        )
    }
}

export default App;


//   const [data, setData] = useState(null);
//   const callAPI = async () => {
//     return Promise.resolve("Hello from Steezy 👋");
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await callAPI();
//         setData(response);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchData();
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{data}</p>
//       </header>
//     </div>
//   );