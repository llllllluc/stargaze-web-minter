import React from "react";
import logo from "./keplr-logo.png";
import "./App.css";
import {walletButton} from "./Wallet";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="app">
      <div className="container-sm ">
        <div className="row">
          <div className="col p-5">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ maxWidth: "200px", margin: "auto", display: "block" }}
            />
          </div>
        </div>

        <div className="card ">
          <div className="card-header">Send Coin</div>
          {walletButton}

          {/* <div className="card-body">
            <b>Address:</b>
            <div id="address"></div>
            <form name="sendForm">
              <div className="form-group">
                  <label for="recipient">Recipient</label>
                  <input className="form-control" id="recipient" name="recipient">
              </div>
              <div className="form-group">
                  <label for="amount">Amount</label>
                  <div className="input-group">
                      <input className="form-control" id="amount" name="amount">
                      <div className="input-group-append">
                          <div className="input-group-text">OSMO</div>
                      </div>
                  </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
