import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../assets/logo.svg'

const AppWrapper = styled.div`
  font-family: 'Quicksand', 'Raleway', sans-serif;
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 5rem;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
  color: white;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  color: white;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  width: 10rem; 
`

const Search = styled.input`
  font-family: 'Raleway', sans-serif;
  font-size: large;
  color: white;
  background-color: #222;
  flex: auto;
  border: none;
  &:focus {
    outline: none;
  } 
`


const AppTitle = styled.h1`
  font-family: 'Quicksand', 'Raleway', sans-serif;
  font-weight: 800;
  font-size: large;
  margin: 1rem 0rem 0rem 0rem;
  letter-spacing: 0.04em;
`

const AppIntro = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: medium;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <LogoWrapper>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Flickr Gallery</AppTitle>
          </LogoWrapper>
          <Search placeholder="Search">
            
          </Search>
        </AppHeader>
        <AppIntro>
          Bootstrapped with <code>create-react-app</code>.
        </AppIntro>
        <AppIntro>
          Components styled with <code>styled-components</code>{' '}
          <EmojiWrapper aria-label="nail polish" />
        </AppIntro>
      </AppWrapper>
    )
  }
}

export default App