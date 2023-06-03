import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Alert,
} from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
const HomePage = (props) => {
  //
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    date: "",
  };
  const [newPage, setNewPage] = useState(true);
  console.log("newPage", newPage);
  const [editPage, setEditPage] = useState(false);
  console.log("editPage", editPage);
  const [editIndex, setEditIndex] = useState(null);
  console.log("editIndex", editIndex);
  const [newInput, setNewInput] = useState(initialState);
  console.log("newInput", newInput);
  const [editInput, setEditInput] = useState(null);
  console.log("editInput", editInput);
  const [tableRecord, setTableRecord] = useState([]);
  console.log("tableRecord", tableRecord);
  // alert
  const [alert, setAlert] = useState(false);
  console.log("alert", alert);

  // function to get data
  const getData = async () => {
    try {
      const data1 = await axios.get(
        `https://61f92a85783c1d0017c449c4.mockapi.io/users`
      );
      const { data } = data1;
      setTableRecord(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // handle new form input function

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const data = { ...newInput };
    data[name] = value;
    setNewInput(data);
    // data.fName = value
  };
  // handle Edit form input function
  const handleEdit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const data = { ...editInput };
    data[name] = value;
    setEditInput(data);
    // data.fName = value
  };
  // add new Data Function
  const addNewData = () => {
    // logic for check all fields are filled
    const { fName, lName, email, date } = newInput;
    if (fName !== "" && lName !== "" && email !== "" && date !== "") {
      const newData = [...tableRecord];
      newData.push(newInput);
      setTableRecord(newData);
      setNewInput(initialState);
      setAlert(false);
      postData(newData);
    } else {
      setAlert(true);
    }
  };
  const postData = async (newData) => {
    const body = newInput;
    const data = await axios.post(
      `https://61f92a85783c1d0017c449c4.mockapi.io/users`,
      body
    );
    console.log("post-data", data);
  };
  // update the data function
  const addEditData = () => {
    // logic for check all fields are filled
    const { fName, lName, email, date, id } = editInput;
    if (fName !== "" && lName !== "" && email !== "" && date !== "") {
      const newData = [...tableRecord];
      newData[editIndex] = editInput;
      setTableRecord(newData);
      setAlert(false);
      cancelEdit();
      editData(id);
      // remaining
    } else {
      setAlert(true);
    }
  };
  // edit data to server
  const editData = async (id) => {
    try {
      const body = editInput;
      const result = await axios.put(
        `https://61f92a85783c1d0017c449c4.mockapi.io/users/${id}`,
        body
      );
    } catch (error) {
      console.error(error);
    }
  };

  // clear NewData Function
  const clearNewData = () => {
    setNewInput(initialState);
  };
  // clear editData Function
  const clearEditData = () => {
    setEditInput(initialState);
  };

  // triggers the edit form
  const editTrigger = (index) => {
    const editData = tableRecord[index];
    setEditInput(editData);
    setNewPage(false);
    setEditPage(true);
    setEditIndex(index);
  };

  // cancels edit page function
  const cancelEdit = () => {
    setNewPage(true);
    setEditPage(false);
    setEditIndex(null);
  };

  // delete data from table
  const deleteData = (index, id) => {
    const data = [...tableRecord];
    data.splice(index, 1);
    setTableRecord(data);
    delData(id);
  };
  // function to delete all records
  const delData = async (id) => {
    try {
      await axios.delete(
        `https://61f92a85783c1d0017c449c4.mockapi.io/users/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="m-5">
        {alert && (
          <Alert
            variant={"danger"}
            dismissible
            className="custom-alert text-center"
            onClick={() => setAlert(false)}
          >
            Please Fill All Input Fields
          </Alert>
        )}

        <Container>
          {newPage ? (
            <Form className="form-input-area">
              <h1 className="text-center pt-2">Add New Data Form</h1>
              <Row xs={6} className="p-4 m-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formfName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fName"
                      placeholder="Enter First Name"
                      value={newInput?.fName}
                      onChange={handleInput}
                    />
                    <Form.Text className="text-muted">
                      Enter Your First Name
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  {" "}
                  <Form.Group className="mb-3" controlId="formLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lName"
                      placeholder="Enter last Name"
                      value={newInput?.lName}
                      onChange={handleInput}
                    />
                    <Form.Text className="text-muted">
                      Enter Your Last Name
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleInput}
                      value={newInput?.email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      placeholder="Select Date"
                      onChange={handleInput}
                      value={newInput?.date}
                    />
                    <Form.Text className="text-muted">Enter Date</Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} className="text-center">
                  <Button className="m-2 btn btn-success" onClick={addNewData}>
                    Add
                  </Button>
                  <Button className="m-2 btn btn-danger" onClick={clearNewData}>
                    Clear
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            ""
          )}
          {editPage ? (
            <Form className="form-input-area">
              <h1 className="text-center pt-2">Edit New Data Form</h1>
              <Row xs={6} className="p-4 m-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="formfName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fName"
                      placeholder="Enter First Name"
                      value={editInput?.fName}
                      onChange={handleEdit}
                    />
                    <Form.Text className="text-muted">
                      Enter Your First Name
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  {" "}
                  <Form.Group className="mb-3" controlId="formLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lName"
                      placeholder="Enter last Name"
                      value={editInput?.lName}
                      onChange={handleEdit}
                    />
                    <Form.Text className="text-muted">
                      Enter Your Last Name
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleEdit}
                      value={editInput?.email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      placeholder="Select Date"
                      onChange={handleEdit}
                      value={editInput?.date}
                    />
                    <Form.Text className="text-muted">Enter Date</Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={12} className="text-center">
                  <Button className="m-2 btn btn-success" onClick={addEditData}>
                    Edit
                  </Button>
                  <Button
                    className="m-2 btn btn-danger"
                    onClick={clearEditData}
                  >
                    Clear
                  </Button>
                  <Button className="m-2 btn btn-warning" onClick={cancelEdit}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            ""
          )}
          <Row xs={6} md={6} className="p-4">
            {/* data visible table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Date of Birth</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableRecord?.length > 0 &&
                  tableRecord.map(
                    ({ fName, lName, email, date, id }, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{fName}</td>
                          <td>{lName}</td>
                          <td>{email}</td>
                          <td>{date}</td>
                          <td
                            onClick={() => editTrigger(index)}
                            className="cursor-pointer"
                          >
                            <BiEdit />
                          </td>
                          <td
                            className="cursor-pointer"
                            onClick={() => deleteData(index, id)}
                          >
                            <MdDeleteForever />
                          </td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
