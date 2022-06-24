import { Modal } from "react-bootstrap";

export const MyVerticallyCenteredModal = (props) => {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="background-color: transparent"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              <span className="text-center">Modal heading</span>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="p-0">
          <img className="rounded mx-auto d-block img-fluid" src={props.image}></img>
        </Modal.Body>
        {/* <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer> */}
      </Modal>
    );
  }
