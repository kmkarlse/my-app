/* eslint-disable import/no-anonymous-default-export */
import { Component } from 'react'
import MyComponent from "../components/MyComponent"
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Food from '../components/Food'
//[label /pages/index.js]

export default class extends Component {
  render () {
    

    return <>
      <MyComponent />
      <Wrapper> <Title text="It works"/> </Wrapper>
      <ul> <Food /> </ul>
    </>
  }}

