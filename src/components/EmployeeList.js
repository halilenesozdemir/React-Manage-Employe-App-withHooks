import { useContext, useEffect, useState, useRef } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';

const EmployeeList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { employees } = useContext(EmployeeContext);

  useEffect(() => {
    handleClose();
  }, [employees]);

  const myRef = useRef(null);

  const onButtonClick = () => {
    myRef.current.focus();
  };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal">
              <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>

      <input ref={myRef} type="text"></input>
      <button onClick={onButtonClick}>Focus Input</button>
    </>
  );
};

export default EmployeeList;
