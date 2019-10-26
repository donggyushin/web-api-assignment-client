import React from 'react';
import styled from 'styled-components';
import PublicMainComponent from './public/Main/Main';


const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`

const PublicComponent = () => {

    return <Container>
        <PublicMainComponent />
    </Container>
}

export default PublicComponent