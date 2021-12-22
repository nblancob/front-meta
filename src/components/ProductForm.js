import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";

const Newproduct = ({ formValue, handleChange }) => {
  const handleValue = (formValue) => {
    if (formValue.state === true) {
      return "true";
    } else {
      return "false";
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicid">
        <label>ID Producto:</label>
        <Form.Control
          name="id_producto"
          type="text"
          placeholder="ID del producto"
          onChange={handleChange}
          value={formValue.id_producto}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <label>Descripción:</label>
        <Form.Control
          name="description"
          type="text"
          placeholder="Descripción del producto"
          onChange={handleChange}
          value={formValue.description}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFase">
        <label>Fase:</label>
        <Form.Control
          name="phase"
          type="text"
          placeholder="Fase del proyecto"
          onChange={handleChange}
          value={formValue.phase}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEsp">
        <label>Objetivo especifico:</label>
        <Form.Control
          name="specific_obj"
          type="text"
          placeholder="Objetivos Especificos"
          onChange={handleChange}
          value={formValue.specific_obj}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEsp">
        <label>Lider:</label>
        <Form.Control
          name="mandated"
          type="text"
          placeholder="Lider"
          onChange={handleChange}
          value={formValue.mandated}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <label>Presupuesto:</label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <Form.Control
            name="budget"
            type="number"
            placeholder="Presupuesto"
            onChange={handleChange}
            value={formValue.budget}
          />
        </InputGroup>
      </Form.Group>
      <label>Estado:</label>
      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Select
          name="state"
          aria-label="Default select example"
          onChange={handleChange}
          value={handleValue(formValue)}
        >
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Newproduct;
