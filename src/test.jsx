import { useEffect, useState } from "react";


function Test() {

  const [datas, Getdatas] = useState([])
  
  useEffect(()=>{

    fetch("http://localhost:8000/collection/all")
    .then(res => res.json())
    .then(data => Getdatas(data.data))
    .catch(err => console.log(err))
  },[])

  return(
    <>
    {
  datas.map((val, index) => (
    <div key={index}>
      <p className="text-red-800">{val.payload.text}</p>
      <audio 
        src={`data:audio/mp3;base64,${val.payload.audio_base64}`} 
        controls
      ></audio>
    </div>
  ))
}

    </>
  )
}

export default Test;
