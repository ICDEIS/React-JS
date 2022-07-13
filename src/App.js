

import React from "react";
import Counter from "./comps/counter";
import Input from "./comps/input";
import Toggle from "./comps/toggleBt";
import './style/main.css'


function App() {


  return (
    <>
      <div className="main">
        <Counter/>
        <Counter/>
        <Input/>
        <Toggle/>
      </div>
    </>
  )
}
export default App