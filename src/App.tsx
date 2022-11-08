import React, { useState } from 'react';
import Header from './Components/Header';
import Game from './Components/Game';
import styled from 'styled-components';
import Global from './styles/global';
import Footer from './Components/Footer';
import { Provider } from 'react-redux'

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    padding: 50px 0px;
`
const App = () => {
    return (

        <AppContainer >
            <Global/>
            <Header/>
            <Game />
            <Footer/>
        </AppContainer>
    )
}

export default App