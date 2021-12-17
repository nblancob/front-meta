import React from "react";
import { useQuery, gql } from "@apollo/client";
import Table from 'react-bootstrap/Table';
import tablep from '../styles/table.css';


const PROJECTS_QUERY = gql`
  {
    getProjects {
      _id
      name
      phase
      mandated
      budget
      general_obj
    }
  }
`;

function Tablepro() {
  const { data, loading, error } = useQuery(PROJECTS_QUERY);
  if (loading) return "Loading ...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
  return (
    <div className="container">
      <Table striped bordered hover className="Tablep" style={{tablep}}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fase</th>
            <th>Lider</th>
            <th>Objetivo General</th>
            <th>Presupuesto</th>
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
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Tablepro;
