/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import MyComponent from "../components/MyComponent"
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Food from '../components/Food'
import Alert from '../components/Alert'





function Component() {

  const [inputValue, setInputValue] = useState('Test')

  return (
    <section>
    <MyComponent />
    <Wrapper> <Title text="It works"/></Wrapper>
    <ul> <Food /> </ul>
    <Alert inputValue={inputValue} setInputValue={setInputValue} />
    <p>{inputValue}</p>
    </section>

  )
}

export default Component;
  