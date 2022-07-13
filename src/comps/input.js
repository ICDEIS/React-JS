

import React, { useState } from "react";

export default function Input() {
   const [value, setValue] = useState('IC')

   return (
      <React.Fragment>
         <div>Name: {value}</div>
        <input value={value} onChange={event => setValue(event.target.value)} type="text" className='form-control' />

      </React.Fragment> 
   )
}
