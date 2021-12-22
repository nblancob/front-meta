import Form from "react-bootstrap/Form";

const UserForm = ({ newUser, SetnewUser }) => {
  const onChange = (event) => {
    SetnewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Label>Rol</Form.Label>
        <Form.Select
          name="rol"
          aria-label="Default select example"
          onChange={onChange}
        >
          <option value="leader">Investigador</option>
          <option value="student">Estudiante</option>
          <option value="Admin">Administrador</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};
export default UserForm;
