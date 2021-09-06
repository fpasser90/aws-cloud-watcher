import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
// import * as AWS from 'aws-sdk'
import * as AWS from "@aws-sdk/client-cloudwatch-logs";
const client = new AWS.CloudWatchLogs({ region: "us-east-2" });

function App() {
  useEffect(() => {
    // let params = {
    //     MetricData: [ 
    //     {
    //       MetricName: `DEMO_COUNT`, 
    //       Timestamp: new Date,
    //       Unit: 'Count',
    //       Value: 1.0
    //     }
    //     ],
    //     Namespace: 'STARTUP_KIT/API'  
    // }
    // client
    // .associateKmsKey(params)
    // .then((data) => {
    //   console.log('cloudWatch data', data)
    //   // process data.
    // })
    // .catch((error) => {
    //   console.log('cloudWatch error', error)
    //   // error handling.
    // });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
