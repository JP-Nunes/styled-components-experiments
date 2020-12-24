import React from 'react'

import { Container, Row, Column } from '../../styles/grid'
import { Title } from './styles'

function App() {
  return (
    <Container>
      <Row>
        <Column backgroundColor="red" sm="12" md="6" xlg="4">
          <Title>1</Title>
        </Column>
        <Column backgroundColor="green" sm="12" md="6" xlg="4">
          <Title>2</Title>
        </Column>
        <Column backgroundColor="blue" sm="12" md="6" xlg="4">
          <Title>3</Title>
        </Column>       
      </Row>
    </Container>
  );
}

export default App;
