import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
// import * as AWS from 'aws-sdk'
import * as AWS from "@aws-sdk/client-cloudwatch-logs";
const client = new AWS.CloudWatchLogs({ 
  region: "us-east-2",
  credentials: {
    accessKeyId: 'AKIARRJTSYGP5DBECAG4',
    secretAccessKey: '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'
}
});

function App() {
  useEffect(() => {
    let params = {
        MetricData: [ 
        {
          MetricName: `DEMO_COUNT`, 
          Timestamp: new Date,
          Unit: 'Count',
          Value: 1.0
        }
        ],
        Namespace: 'STARTUP_KIT/API'  
    }
    client
    .associateKmsKey({
      "logGroupName": "metrices",
      "kmsKeyId": "arn:aws:kms:us-east-2:105871753631:key/149749e5-b9f7-4d90-a494-3dcfc10dd982"
    }, params)
    .then((data) => {
      console.log('cloudWatch data', data)
      // process data.x 
    })
    .catch((error) => {
      console.log('cloudWatch error', error)
      // error handling.
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy Updated Code
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
