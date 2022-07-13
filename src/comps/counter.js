

// import { useState } from 'react';

// function Counter() {
//    const [num, setCount] = useState(1)


//    function incr() {
//       setCount(nm => nm + 1)
//     }
//     function decr() {
//       setCount(nm => nm - 1)
//     }

//    return (
//       <>
//          <br/>
//          <h1>Counter: {num}</h1>
//          <button onClick={incr} className='btn btn-primary'>Increase</button>
//          <button onClick={decr} className='btn btn-warning mx-1'>Decrease</button>
         
//       </>
//    )
// }

// export default Counter


import React from "react";

class Counter extends React.Component {
   constructor(property) {
      super(property)
      this.state = {
         count: 0
      }
      this.increase = this.increase.bind(this)
      this.decrease = this.decrease.bind(this)
   }
   increase() {
      this.setState({count: this.state.count +1})
   }
   decrease() {
      this.setState({count: this.state.count -1})
   }

   render() {
      return (
         <>
            <h2>Counter: {this.state.count}</h2> 
            <button onClick={this.increase} className="btn btn-warning">Increase</button>
            <button onClick={this.decrease} className="btn btn-success">Decrease</button>
         </>
      )
   }
}

export default Counter