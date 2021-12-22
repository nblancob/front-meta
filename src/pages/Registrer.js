import Card from "react-bootstrap/Card";
import home from "../styles/Home.css";
import UserForm from "../components/UserForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Alert from "react-bootstrap/Alert";

const MUTATION_REGUSER = gql`
  mutation regUser(
    $name: String!
    $email: String!
    $rol: String!
    $password: String!
    $authorization: Boolean!
  ) {
    regUser(
      input: {
        name: $name
        email: $email
        rol: $rol
        password: $password
        authorization: $authorization
      }
    ) {
      _id
      name
    }
  }
`;

const Registrer = () => {
  const [alert, Setalert] = useState();
  const [variant, Setvariant] = useState(" ");
  const [newUser, SetnewUser] = useState({
    authorization: false,
    active_project: null,
    aplication: null,
  });

  const [createUser] = useMutation(MUTATION_REGUSER);

  const onClick = (e) => {
    if (newUser.email.includes("@")) {
      createUser({
        variables: {
          name: newUser.name,
          email: newUser.email,
          rol: newUser.rol,
          password: newUser.password,
          authorization: newUser.authorization,
        },
      });
      Setalert("Registrado correctamente");
      Setvariant("success");
    } else {
      Setalert("Ingrese un correo valido");
      Setvariant("danger");
    }
  };

  return (
    <div className="container" style={{ home }}>
      <div className="abs-center">
        <Card className="card">
          {alert && <Alert variant={variant}>{alert} </Alert>}
          <Card.Img variant="top" className="image" />
          <Card.Title className="text-center">Registro</Card.Title>
          <Card.Body>
            <UserForm newUser={newUser} SetnewUser={SetnewUser} />
          </Card.Body>
          <Button
            className="registrar-btn"
            variant="primary"
            type="submit"
            onClick={onClick}
          >
            Registrarse
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default Registrer;
