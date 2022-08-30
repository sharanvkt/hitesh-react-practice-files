import React, { Fragment } from "react";
import Prvider from "./Provider";
import Context from "./Context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Misson Name:{context.data.mname}</p>
          <h2> Misson Status:{context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>
            press to accept 
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Prvider>
        <Agents />
      </Prvider>
    </div>
  );
};

export default App;
