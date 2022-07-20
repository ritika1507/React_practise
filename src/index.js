// 1 import the react and reactDOM lib

import React from 'react';
import  ReactDOM  from 'react-dom/client';


// 2 Get a referece to the div with ID root
const el = document.getElementById('root');


// 3 Tell react to take control of that element
const root = ReactDOM.createRoot(el);


// 4 create a component
function App()
{
    // let message = [1,2,3];

    // if(Math.random() > 0.5)
    // {
    //     message = 'Hello again!';
    // }
    // return <h1>{message}</h1>;

    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <hi>{time}</hi>

    // return <hi>{new Date().toLocaleTimeString()}</hi>

   
}


// 5 show component on the screen 

root.render(<App />);