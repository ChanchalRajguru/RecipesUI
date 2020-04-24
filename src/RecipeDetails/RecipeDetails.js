import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//props is going to be the selected recipe
const recipeDetails = (props) => {
    return (
        <div >
            <h2>Edit Recipe Details</h2>
            <Container className='container p-2 my-3 bg-dark text-white'>
            <Form>
            <Form.Group controlId="formBasicEmail">
            <div className="p-6">
                    <section>
                    <Form.Label>ID: </Form.Label><Form.Control  type='text' name='id' disabled={true} value={props.recipe.id}/><br />
                        <Form.Label>Name: </Form.Label><Form.Control type='text' name='name' value={props.recipe.name} onChange={props.valueChanged} required/><br />
                        <Form.Label>Author: </Form.Label><Form.Control type='text' name='author' value={props.recipe.author} onChange={props.valueChanged} required/><br />
                        <Form.Label>Preparation Time: </Form.Label><Form.Control type='text' name='preparationTime' value={props.recipe.preparationTime} onChange={props.valueChanged} required/><br />
                        <Form.Label>Description: </Form.Label><br /><Form.Control as="textarea" rows="3"  name='description' row='10' cols='50' value={props.recipe.description} onChange={props.valueChanged} required/><br />
                    </section>
            </div>
            <section>
                <Button className=' mr-2' onClick={props.newClickHandler}>New</Button>
                <Button className=' mr-2' variant="success" onClick={props.saveClickHandler}>Save</Button>
                <Button className=' mr-2' variant="danger" onClick={props.deleteClickHandler}>Delete</Button>
            </section>
            </Form.Group>
            </Form>
            </Container>
        </div>
    );
}

export default recipeDetails;