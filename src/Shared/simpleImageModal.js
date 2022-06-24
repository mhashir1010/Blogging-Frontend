export const SimpleImageModal = (props) =>{
    return(<div class="modal-dialog modal-dialog-centered">
        <div className="row">
            <div className="cols-6">
            <img src={props.image}></img>
            </div>
            <button onClick={props.onHide}>Close</button>
        </div>
  </div>)
}