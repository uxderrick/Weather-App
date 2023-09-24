import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Textfield() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter a city" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Textfield;
