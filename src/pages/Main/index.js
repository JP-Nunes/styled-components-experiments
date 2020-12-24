import React from 'react'

import { Container, Row, Column } from '../../styles/grid'
import { Title } from './styles'

function App() {
  return (
    <Container>
      <Row>
        <Column backgroundColor="red" xsm="12" sm="12" md="6" lg="4" xlg="4">
          <Title>1</Title>
        </Column>
        <Column backgroundColor="green" xsm="12" sm="12" md="6" lg="4" xlg="4">
          <Title>2</Title>
        </Column>
        <Column backgroundColor="blue" xsm="12" sm="12" md="6" lg="4" xlg="4">
          <Title>3</Title>
        </Column>       
      </Row>
    </Container>
  );
}

export default App;
