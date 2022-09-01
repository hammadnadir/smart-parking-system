import React, { useState } from 'react'
import Cars from '../components/Cars'
import Banner from '../components/Cars/Banner'

function Parking() {

  const [inputText, setInputText] = useState("");
  return (
    <div>
      <Cars inputText={inputText} setInputText={setInputText}/>
        <Banner inputText={inputText} setInputText={setInputText}/>
    </div>
  )
}

export default Parking