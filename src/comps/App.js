import React, { useEffect } from 'react'
import { Button } from '@material-ui/core';
import SimpleTabs from './menu.js'


const App = () =>{
    const alert1 = ()=>{
        const csInterface = new CSInterface();
        const obj ={"msg":'hello from react!'}
        csInterface.evalScript('test("' + JSON.stringify(obj).replace(/"/g,'\\"') + '")' );
}

const rfrsh = () =>{

    window.location.reload()
}

return(

   <>
   <SimpleTabs></SimpleTabs>
<Button variant="outlined">Default</Button>
   <h1>ITS WORKING!</h1>
   <button onClick={rfrsh}>REFRESH</button>
   <button onClick={alert1}>CLICK!</button>

   </>
)

}

export default App