// REACT IMPORT
import React from 'react';

// COMPONENT IMPORT
import C from "./components";

// SASS IMPORT
import "./styles/app.scss";

function App() {
  return (
    <>
      <C.Navigation.SideNavBar />
      <C.Modules.Input />
    </>
  );
}

export default App;
