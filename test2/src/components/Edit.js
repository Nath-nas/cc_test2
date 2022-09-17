import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const Edit = () => {
    const id = window.location.pathname.split('/')[2];
    console.log(id);

    const [data, setData] = useState("");
    useEffect(() => {
        axios.get('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/product?id=' + id, {
          headers: {
          }
        }).then(res => {
          setData(res.data)
          console.log(res.data.body);
        }).catch(err => {
          console.log(err)
        });
    }, []);

    function submit() {
        console.log(document.querySelector('#name').value.toString());
        console.log(document.querySelector('#description').value.toString());
        console.log(document.querySelector('#price').value.toString());
        console.log(document.querySelector('#category').value.toString());
        axios.put('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/products', {
            id : id.toString(),
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
            <Label>ID: {data.id}</Label>
        </FormGroup>
        <FormGroup>
            <Label>Name</Label>
            <Input id="name" type="text" defaultValue={data.name}></Input>
        </FormGroup>
        <FormGroup>
            <Label>Description</Label>
            <Input id="description" type="text" defaultValue={data.productDescription}></Input>
        </FormGroup>
        <FormGroup>
            <Label>Prize</Label>
            <Input id="price" type="text" defaultValue={data.price}></Input>
        </FormGroup>
        <FormGroup>
            <Label>Category</Label>
            <Input id="category" type="text" defaultValue={data.category}></Input>
        </FormGroup>
        <Link onClick={()=>submit()} to ='/'>Submit</Link>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form> 
  )
}

export default Edit
