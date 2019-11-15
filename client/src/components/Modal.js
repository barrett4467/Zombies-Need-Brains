import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const ModalExample = (props) => {
    console.log(props);
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={props.isOpen} toggle={toggle} className={className}>
        <ModalBody>
          You Win!!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Okay!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;