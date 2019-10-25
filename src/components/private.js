import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const PrivateComponent = () => <Container>
    Private component
</Container>

export default PrivateComponent