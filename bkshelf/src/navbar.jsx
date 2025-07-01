import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function navbar() {
 
return (
    <>
   <div>
   
     <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>Login</Button>
        <Button>Explore books</Button>
        <Button>Donate Books</Button>
        <Button>Contact Us</Button>
      </ButtonGroup>
      </ButtonToolbar>
    
       </div>
    </>
);

}

export default navbar