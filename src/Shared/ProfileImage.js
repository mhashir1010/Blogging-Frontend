import { Modal } from 'react-bootstrap'
// import '../Shared/index.css'

export const ProfileImage = (props) =>{
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              <span className="text-center">Modal heading</span>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body centered="true" className='p-0 opacity-10' style={{backgroundColor:"#000"}}>
        <div className="rounded card p-0">
            <div className="p-0" >
                <img src={props?.image} alt="" loading='eager' />
            </div>
            <div className="card-content d-flex text-dark flex-column align-items-center">
                <h4 className="pt-2">SomeOne Famous</h4>
                <h5>Creative Desinger</h5>

                {/* <ul className="social-icons d-flex justify-content-center">
                    <li>
                        <a href="#">
                            <span className="fab fa-facebook-f text-dark"></span>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <span className="fab fa-twitter text-dark"></span>
                        </a>
                    </li>
                    <li >
                        <a href="#">
                            <span className="fab fa-instagram text-dark"></span>
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer> */}
      </Modal>
        
    )
}