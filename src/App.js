import React from 'react';
import { Provider } from "react-redux";
import Dashboard from "./pages/pDashboard";
import './App.css';
import { getStore } from "./redux/configStore";

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
