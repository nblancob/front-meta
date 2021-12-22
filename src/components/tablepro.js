import React from "react";
import { useQuery, gql } from "@apollo/client";
import Table from "react-bootstrap/Table";
import tablep from "../styles/table.css";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ProductForm from "./ProductForm";

const PROJECTS_QUERY = gql`
  {
    getProjects {
      _id
      name
      phase
      mandated
      budget
      general_obj
      start_date
      end_date
    }
  }
`;

const Tablepro = () => {
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [productID, setproductID] = useState("");
  const [newProduct, setNewProduct] = useState({
    _id: " ",
    name: " ",
    description: "Descripción del producto",
    price: 0,
    state: false,
  });
  const { data, loading, error } = useQuery(PROJECTS_QUERY);
  if (loading) return "Loading ...";
  if (error) return <pre>{error.message}</pre>;

  const handleClick = async (event) => {
    setproductID(event.target.id);
    setmodalInsertar(true);
  };
  return (
    <div className="container">
      <Table striped bordered hover className="Tablep" style={{ tablep }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fase</th>
            <th>Lider</th>
            <th>Objetivo General</th>
            <th>Presupuesto</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {data.getProjects.map((project, key) => (
            <tr key={key}>
              <td>{project._id}</td>
              <td>{project.name}</td>
              <td>{project.phase}</td>
              <td>{project.mandated}</td>
              <td>{project.general_obj}</td>
              <td>{project.budget}</td>
              <td>{project.start_date}</td>
              <td>{project.end_date}</td>
              <td style={{ width: "5px" }}>
                <Button
                  id={project._id}
                  className="Pencil-btn"
                  style={{ tablep }}
                  onClick={handleClick}
                >
                  <svg
                    id={project._id}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    fill="white"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={modalInsertar}>
        <Modal.Header className="Modal-Header font-link">
          <Modal.Title>{newProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm formValue={newProduct} setFormvalue={setNewProduct} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={newProduct._id}>
            Editar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setmodalInsertar(false);
            }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Tablepro;
