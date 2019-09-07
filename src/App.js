import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import MainTable from "./MainTable";
import Nav from "./Nav";
import SkuRequestor from "./SkuRequestor";
import { createBrowserHistory } from "history";
import { ai } from './TelemetryService';

const history = createBrowserHistory({ basename: '' });
ai.initialize({ history: history });

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <MainTable path="/" />
          <SkuRequestor path="/sku" />
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
