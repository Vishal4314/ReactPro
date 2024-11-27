import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button primary onClick={handleClose}>
              I Accept
            </Button>
          }
        >
          <p>Here ia an important agreement for you to accept.</p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
