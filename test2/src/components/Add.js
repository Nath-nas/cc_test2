import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const Add = () => {
    function submit() {
        axios.put('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/products', {
            id : document.querySelector('#id').value,
            name : document.querySelector('#name').value,
            productDescription : document.querySelector('#description').value,
            price : document.querySelector('#price').value,
            category : document.querySelector('#category').value
        })    
    }
  return (
    <Form>
        <FormGroup>
            <Label>ID</Label>
            <Input id="id" type="text" placeholder='Enter product id'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Name</Label>
            <Input id="name" type="text" placeholder='Enter product name'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Description</Label>
            <Input id="description" type="text" placeholder='Enter product description'></Input>
        </FormGroup>
        <Link onClick={submit} to='/'>Submit</Link>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form> 
  )
}

export default Add
