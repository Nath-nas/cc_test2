import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import {
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

const List = () => {
    const [myList, setMyList] = useState([]);
    useEffect(() => {
        axios.get('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/products', {
          headers: {
          }
        }).then(res => {
          setMyList(res.data.products)
          console.log(res.data);
          console.log(Array.isArray(res.data));
        }).catch(err => {
          console.log(err)
        });
      }, []);
  return (
    <tbody>{myList.map(generateData)}</tbody>
  )
}

function deleteRow(id) {
    axios.delete('https://9gbwl4qxh1.execute-api.ap-southeast-1.amazonaws.com/product/products?id=' + id);
    console.log("DELETE" + id); 
    setTimeout(()=>{
      window.location.reload(false);
  }, 500);
  };
  

function generateData(props) {
    return (
        <tr key={props.id}>
        <th scope="row">{props.id}</th>
        <th>{props.name}</th>
        <th>{props.productDescription}</th>
        <th>{props.price}</th>
        <th>{props.category}</th>
        <th>
        <Link className='btn btn-warning mr-1' to={"/edit/" + props.id}>Edit</Link>
        <Button onClick={deleteRow.bind(this,props.id)}color='danger'>Delete</Button>
        </th>
        </tr>
    )
  }

export default List
