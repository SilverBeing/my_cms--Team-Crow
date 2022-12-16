import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Unauthorized = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setShow();
    navigate("/");
  };
  const handleClick = () => {
    navigate("/createdemo");
  };

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <form id="create-page">
        <Modal
          show={show}
          onHide={show}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Oops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="pop-up">
              <p>
                You dont have access to this feature.<br></br>
                <br></br> Go back to login or Click continue to get a demo
                website.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Back
            </Button>
            <Button variant="success" onClick={handleClick}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default Unauthorized;
