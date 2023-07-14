import { Modal as ModalComponet, Button } from 'react-bootstrap';

export function Modal(props){

    return (
        <>

          <ModalComponet show={props.show} onHide={props.handleClose}>
            <ModalComponet.Header closeButton>
              <ModalComponet.Title>{props.Title}</ModalComponet.Title>
            </ModalComponet.Header>
            <ModalComponet.Body>{props.message}</ModalComponet.Body>
            <ModalComponet.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
            </ModalComponet.Footer>
          </ModalComponet>
        </>
      );
    }