import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';
import IncreseByTwoCounter from './components/IncreseByTwoCounter';
import{Row,Col} from "reactstrap";
import "./App.css"

function App() {
  return (
    <div>
      <Row className="rowSayac">
        <Col className="colSayac">
          <Counter />
        </Col>
        </Row>
        <Row className="rowButton"> 
        <Col sx="3">
          <IncreaseCounter/>
        </Col>
        <Col sx="3">
          <DecreaseCounter/>
        </Col>
        <Col sx="6">
          <IncreseByTwoCounter/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
