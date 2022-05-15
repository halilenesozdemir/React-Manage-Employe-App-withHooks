import { Form, Button } from 'react-bootstrap';

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="email" placeholder="Email *" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="textarea" placeholder="Address" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="text" placeholder="Phone" required />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
