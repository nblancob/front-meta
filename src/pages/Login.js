import Card from "react-bootstrap/Card";
import home from "../styles/Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const QUERY_AUTHUSER = gql`
  query authUser($email: String!, $password: String!) {
    authUser(input: { email: $email, password: $password })
  }
`;

const Home = () => {
  const [User, SetUser] = useState({
    email: " ",
    password: " ",
  });
  const [authUser, data] = useLazyQuery(QUERY_AUTHUSER);

  const onClick = () => {
    authUser({
      variables: { email: User.email, password: User.password },
    });
    if (data.data.authUser === true) {
      console.log("WELCOME TO THE JUNGLE");
    } else {
      console.log("GET OUT FUCK YOU");
    }
  };

  const onChange = (event) => {
    SetUser({ ...User, [event.target.name]: event.target.value });
  };

  return (
    <div className="container" style={{ home }}>
      <div className="abs-center">
        <Card className="card">
          <Card.Img
            variant="top"
            className="image"
            src="https://image.freepik.com/vector-gratis/concepto-innovacion-dibujado-mano-cohete_23-2149164445.jpg"
          />
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={onChange}
                />
                <Form.Text className="text-white">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <Button
                className="ingresar-btn"
                variant="success"
                // type="submit"
                onClick={onClick}
              >
                Ingresar
              </Button>
              <Link to="/registrer">
                <Button
                  className="registrar-btn"
                  variant="primary"
                  type="submit"
                >
                  Registrarse
                </Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
