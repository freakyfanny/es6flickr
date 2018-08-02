import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from './actions';
import styled, { keyframes } from 'styled-components';
import logo from './assets/logo.svg';

const AppWrapper = styled.div`
  font-family: 'Quicksand', 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
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
  min-height: 10rem;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  color: white;
  text-align: center;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  width: 11rem; 
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
  align-self: center;
  code {
    font-size: 1.3rem;
  }
`

const ImageContainer = styled.div`
  margin: 4rem auto 0;
  font-size:0;
  max-width: 50%;
`

const ImageWrap = styled.div` 
  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);
  -moz-transform: rotate(45deg) translate3d(0, 0, 0);
  -ms-transform: rotate(45deg) translate3d(0, 0, 0);
  -o-transform: rotate(45deg) translate3d(0, 0, 0);
  transform: rotate(45deg) translate3d(0, 0, 0);
  display: inline-block;
  -webkit-transition: -webkit-transform 300ms ease-out;
  -moz-transition: -moz-transform 300ms ease-out;
  transition: transform 300ms ease-out;
  width: 100px;
  &:hover {
    -webkit-transition: -webkit-transform 500ms ease-out;
    -moz-transition: -moz-transform 500ms ease-out;
    transition: transform 500ms ease-out;
    -webkit-transform: rotate(45deg) translate3d(10px, 10px, 0);
    -moz-transform: rotate(45deg) translate3d(10px, 10px, 0);
    -ms-transform: rotate(45deg) translate3d(10px, 10px, 0);
    -o-transform: rotate(45deg) translate3d(10px, 10px, 0);
    transform: rotate(45deg) translate3d(10px, 10px, 0);
  }
  &:nth-child(even) {
    width: 40px;
    -webkit-transform: rotate(225deg) translate3d(30px, 120px, 0);
    -moz-transform: rotate(225deg) translate3d(30px, 120px, 0);
    -ms-transform: rotate(225deg) translate3d(30px, 120px, 0);
    -o-transform: rotate(225deg) translate3d(30px, 120px, 0);
    transform: rotate(225deg) translate3d(30px, 120px, 0);
  }
  &:nth-child(even) .crop img {
    -webkit-transform: skew(-20deg, -20deg) rotate(-225deg);
    -moz-transform: skew(-20deg, -20deg) rotate(-225deg);
    -ms-transform: skew(-20deg, -20deg) rotate(-225deg);
    -o-transform: skew(-20deg, -20deg) rotate(-225deg);
    transform: skew(-20deg, -20deg) rotate(-225deg);
  }
  &:nth-child(even):hover {
    -webkit-transform: rotate(225deg) translate3d(40px, 130px, 0);
    -moz-transform: rotate(225deg) translate3d(40px, 130px, 0);
    -ms-transform: rotate(225deg) translate3d(40px, 130px, 0);
    -o-transform: rotate(225deg) translate3d(40px, 130px, 0);
    transform: rotate(225deg) translate3d(40px, 130px, 0);
  }
`

const ImageCrop = styled.div` 
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0;
  display: block;
  overflow: hidden;
  -webkit-transform: skew(20deg, 20deg) translate3d(0, 0, 0);
  -moz-transform: skew(20deg, 20deg) translate3d(0, 0, 0);
  -ms-transform: skew(20deg, 20deg) translate3d(0, 0, 0);
  -o-transform: skew(20deg, 20deg) translate3d(0, 0, 0);
  transform: skew(20deg, 20deg) translate3d(0, 0, 0);
`

const CroppedImage = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  left: -45%;
  margin-top: 36px;
  margin-left: 36px;
  top: -50%;
  -webkit-transform: skew(-20deg, -20deg) rotate(-45deg);
  -moz-transform: skew(-20deg, -20deg) rotate(-45deg);
  -ms-transform: skew(-20deg, -20deg) rotate(-45deg);
  -o-transform: skew(-20deg, -20deg) rotate(-45deg);
  transform: skew(-20deg, -20deg) rotate(-45deg);
  opacity: 0.7;
  -webkit-transition: opacity 300ms ease-in-out;
  -moz-transition: opacity 300ms ease-in-out;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 1;
  }
  `

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

const ListItem = styled.li`
  margin: 0.5rem 0;
`

const Link = styled.a`
  color: #1497d4;
  margin-left: 0.25rem;
  text-decoration: none;
  &:hover {
    color: #0b4c6b;
  }
`

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  flickrImage = (x, i) => (
    <ImageWrap key={x.id}>
      <ImageCrop>
        <CroppedImage
          src={x.getUrl()}
          alt={x.getTitle()}
        />
      </ImageCrop>
    </ImageWrap>
  )


  render() {
    console.log(this.props);
    const results = this.props.photos ? this.props.photos : [];
    console.log(results)
    console.log(this.props.photos);
    return (
      <AppWrapper>
        <AppHeader>
          <LogoWrapper>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Awesome Gallery</AppTitle>
          </LogoWrapper>
          <Search placeholder="Search">
            </Search>
        </AppHeader>
        <AppIntro>
          <List>
            <ListItem>Build with 
             <Link href="https://github.com/facebook/react">
              <code>ReactJS</code>
             </Link>.
            </ListItem>
            <ListItem>Components styled with 
             <Link href="https://github.com/styled-components/styled-components">
              <code>styled-components</code>
             </Link>.
            </ListItem>
            <ListItem>Store created using
             <Link href="https://github.com/reactjs/react-redux/">
              <code>Redux</code>
             </Link>.
            </ListItem>
            <ListItem>Feeding actions from redux with 
             <Link href="https://github.com/redux-saga/redux-saga">
              <code>Redux Saga</code>
             </Link>.
            </ListItem>
            <ListItem>
              Creating immutabble objects with 
             <Link href="https://facebook.github.io/immutable-js/">
               <code>Immutable JS</code>
             </Link>.
            </ListItem>
            <ListItem>
             <Link href="https://facebook.github.io/immutable-js/">
              <code>Immutable JS</code>
             </Link>
            </ListItem>
          </List>
        </AppIntro>
        <ImageContainer>
          {results.map(this.flickrImage)}
        </ImageContainer>
      </AppWrapper>
    );
  }
};

function mapStateToProps(state) {
  const photos = state.data.get('photos');
  return { photos: photos };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
