import { useContext, useEffect, useState } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowAlert = () => setShowAlert(true);

  useEffect(() => {
    handleClose();
  }, [employees]);

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
          {employees
            .sort((a, b) => (a.name < b.name ? 1 : -1))
            .map(employee => {
              return (
                <tr key={employee.id}>
                  <Employee employee={employee} />
                </tr>
              );
            })}
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
    </>
  );
};

export default EmployeeList;

// .sort((a, b) => a.name.localeCompare(b.name))
