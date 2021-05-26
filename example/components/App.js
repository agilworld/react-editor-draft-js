import React from 'react';
import Editor from "../../lib/index"
import "./style.css"

const App = () => (
    <div className="page">
      <main className="page__wrapper">
        <div className="page__main" style={{margin:'0 auto',width:1024}}>
            <h2 style={{margin:"20px",textAlign:"center"}}>Editor Draft JS React Sample</h2>
            <Editor />
        </div>
      </main>
    </div>
);

export default App;