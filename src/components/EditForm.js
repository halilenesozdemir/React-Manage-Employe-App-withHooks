import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const EditForm = () => {
  const { updateEmployee } = useContext(EmployeeContext);

  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" name="name" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="email" placeholder="Email *" name="email" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="textarea" placeholder="Address" name="address" required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="text" placeholder="Phone" name="phone" required />
      </Form.Group>

      <Button variant="success" type="submit" block="true">
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
