import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

function Modalrented() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Available = () => toast.success("Product Modified.");


  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        Available
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title style={{ color: "#f35027" }}>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", marginRight:"30px" }}>
                  <Form.Label style={{ color: "#f35027", marginRight: "15px" }}>
                    Rented{" "}
                  </Form.Label>
                  <Form.Check style={{ fontSize: "15px" }}></Form.Check>
                </div>
                <div style={{ display: "flex" }}>
                  <Form.Label style={{ color: "#f35027", marginRight: "15px" }}>
                    Destroyed{" "}
                  </Form.Label>
                  <Form.Check style={{ fontSize: "15px" }}></Form.Check>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rented to :</Form.Label>
              <Form.Control  style={{ borderColor:"#f35027"}} type="text" placeholder="@username" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Duration</Form.Label>
              <Form.Control style={{ borderColor:"#f35027"}} type="text" placeholder="2 days" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  style={{backgroundColor:"#f35027" , borderColor:"#f35027"}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#f35027" , borderColor:"#f35027"}} variant="primary" onClick={Available}>
Submit          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalrented;
