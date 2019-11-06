import React from "react";
import ReactModal from "react-modal";
import '../Styles/Jobs.css';
import '../Styles/SingleJob.css';

const customStyles = {
  content: { 
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class JobsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      company_name: this.props.job.company_name,
      status: this.props.job.status,
      position: this.props.job.position,
      notes: this.props.job.notes
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal} id='updateJobBtn'>Update Job</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel={this.props.name}
        >
            <div>
          
            <input type='text' placeholder='company_name'/>
            <input type='text' placeholder='status'/>

            <button onClick={this.toggleModal}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default JobsModal;