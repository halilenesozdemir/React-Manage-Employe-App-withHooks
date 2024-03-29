import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useEffect, useState } from 'react';

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  /*   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(''); */

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const { name, email, address, phone } = newEmployee;

  const handleSubmit = e => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  const onInputChange = e => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" value={name} name="name" onChange={e => onInputChange(e)} required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="email" placeholder="Email *" value={email} name="email" onChange={e => onInputChange(e)} required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="textarea" placeholder="Address" value={address} name="address" onChange={e => onInputChange(e)} required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="text" placeholder="Phone" value={phone} name="phone" onChange={e => onInputChange(e)} required />
      </Form.Group>

      <Button variant="success" type="submit" block="true">
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
