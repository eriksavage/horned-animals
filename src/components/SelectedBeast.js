import { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


class SelectedBeast extends Component{
    closeModal = () => {
        this.props.hideModal();
    }

    render(){
        return(
            <Modal
              show={this.props.show}
              onHide={this.closeModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.clickedBeast.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={this.props.clickedBeast.image_url} 
                alt={this.props.clickedBeast.description} 
                title={this.props.clickedBeast.title}
                className="img-fluid"
              ></img>
              <p style={{textAlign: "center"}}>
                {this.props.clickedBeast.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
                <Row md={1}>
                    <Button onClick={this.closeModal}>Close</Button>
                </Row>    
            </Modal.Footer>
          </Modal>
        );
    }
}

export default SelectedBeast;