import Card from "react-bootstrap/Card";
import home from "../styles/Home.css";

const Home = () =>{
  return (
    <div className="container" style={{ home }}>
      <div className="abs-center">
        <Card className="card">
          <Card.Title className="text-center">
            BIENVENIDO
          </Card.Title>
          <Card.Img
            variant="top"
            className="image"
            src="https://image.freepik.com/vector-gratis/concepto-innovacion-dibujado-mano-cohete_23-2149164445.jpg"
          />

          <Card.Body>
            <Card.Title className="title_card text-white">
              Ingresa con Google
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
