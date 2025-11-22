import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import styles from './Usercomponent.module.css'; 

const Usercomponent = () => {
  const [firstname, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const handleAge = (e) => setAge(e.target.value);

  const saveData = (e) => {
    e.preventDefault();
    if (id !== '') {
      let res = data.map((i, index) =>
        index === id
          ? { firstname, lastname, age, phoneno, address, email }
          : i
      );
      setData(res);
    } else {
      setData([...data, { firstname, lastname, age, phoneno, address, email }]);
    }
    resetForm();
  };

  const delData = (id) => {
    let res = data.filter((_, index) => index !== id);
    setData(res);
  };

  const editData = (id) => {
    let res = data.find((_, index) => index === id);
    setName(res.firstname);
    setLastName(res.lastname);
    setAge(res.age);
    setPhoneno(res.phoneno);
    setAddress(res.address);
    setEmail(res.email);
    setId(id);
  };

  const resetForm = () => {
    setName('');
    setLastName('');
    setAge('');
    setPhoneno('');
    setAddress('');
    setEmail('');
    setId('');
  };

  return (
    <div className={styles.wrapper}>
         <h3 className={styles.title}>User Registration Form</h3>
      
     
      <Container fluid="md">
        <Row>
          <Col>
            <Form onSubmit={saveData} className={styles.form}>
              {/* Firstname */}
              <Form.Group className="mb-3">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First name"
                  value={firstname}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {/* Lastname */}
              <Form.Group className="mb-3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              {/* Age */}
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  value={age}
                  onChange={handleAge}
                />
              </Form.Group>

              {/* Phone */}
              <Form.Group className="mb-3">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter phone no"
                  value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                />
              </Form.Group>

              {/* Address */}
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button variant="danger" type="submit">
                Submit
              </Button>{' '}
              <Button variant="secondary" onClick={resetForm}>
                Cancel
              </Button>
            </Form>
          </Col>

          <Col>
            <Table striped bordered hover className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Age</th>
                  <th>Phone no.</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i.firstname}</td>
                    <td>{i.lastname}</td>
                    <td>{i.age}</td>
                    <td>{i.phoneno}</td>
                    <td>{i.address}</td>
                    <td>{i.email}</td>
                    <td>
                      <Button variant="danger" onClick={() => editData(index)}>
                        Edit
                      </Button>{' '}
                      <Button
                        variant="secondary"
                        onClick={() => delData(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Usercomponent;
