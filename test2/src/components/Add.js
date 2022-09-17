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
        console.log(document.querySelector('#id').value.toString());
        console.log(document.querySelector('#name').value.toString());
        console.log(document.querySelector('#description').value.toString());
        console.log(document.querySelector('#price').value.toString());
        console.log(document.querySelector('#category').value.toString());
        axios.put('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/products', {
            id : document.querySelector('#id').value.toString(),
            name : document.querySelector('#name').value.toString(),
            productDescription : document.querySelector('#description').value.toString(),
            price : document.querySelector('#price').value.toString(),
            category : document.querySelector('#category').value.toString()
        }). then(res => console.log(res))
        .catch(err => console.log(err));    
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
    }
  return (
    <Form>
        <FormGroup>
            <Label>ID</Label>
            <Input id="id" class="form-control" type="text" placeholder='Enter product id'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Name</Label>
            <Input id="name" class="form-control" type="text" placeholder='Enter product name'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Description</Label>
            <Input id="description" class="form-control" type="text" placeholder='Enter product description'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Prize</Label>
            <Input id="price" class="form-control" type="text" placeholder='Enter product prize'></Input>
        </FormGroup>
        <FormGroup>
            <Label>Category</Label>
            <Input id="category" class="form-control" type="text" placeholder='Enter product category'></Input>
        </FormGroup>
        <Link onClick={()=>submit()} to='/'>Submit</Link>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form> 
  )
}

export default Add
