/* eslint-disable import/no-anonymous-default-export */
import React, { Component, useState } from 'react'
import MyComponent from "../components/MyComponent"
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Food from '../components/Food'
import Alert from '../components/Alert'





export default class extends Component {

  render = () => {

    const [inputValue, setInputValue] = useState('Test')
    
    setInputValue("");
    
  
    return (
      

      <section>
      <MyComponent />
      <Wrapper> <Title text="It works"/></Wrapper>
      <ul> <Food /> </ul>
      <Alert />
      <p>{inputValue}</p>
      </section>

    )}}
  