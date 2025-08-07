import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';


function Test(){

  //inreact there are 15 Hooks
  //useState - usestate is a hooks that allows to store current state of values
  //const [variable_name, Update_value_function] = useState(initial)
  const [number, Updatenumber] = useState(0);
 
  fetch('http://localhost:5000/send-mail', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message.',
    }),
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

  return (
    <>
    <br /><br /><br />
    <br /><br /><br />
    
    

    </>
  );
};

export default Test
