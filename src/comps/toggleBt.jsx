

import { useState } from "react"

export default function Toggle() {
   const [par, showPar] = useState(false)

   return (
      <>
         <button onClick={() => showPar(!par)} className='btn btn-success mx-5'>New Button</button>
         <hr/>
         {par ? <p className='text'>MacBook Pro M1</p> : null}
      </>
   )
}