import styled from 'styled-components'

const Container = styled.div`
  max-width: 1360px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;

  &:before, &:after {
    content: " ";
    display: table;
  }

  &:after {
    clear: both;
  }
`

const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;

  &:before, &:after {
    content: " ";
    display: table;
  }

  &:after {
    clear: both;
  }
`

const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.grid ? props.grid / 12 * 100 : '8:33')}%
  }
`

function App() {
  return (
    <Container>
      <Row>
        <Column grid='12'>grid 5</Column>
        <Column grid='5'>grid 5</Column>
        <Column grid='7'>grid 2</Column>
      </Row>
    </Container>
  );
}

export default App;
