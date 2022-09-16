import React from 'react'
import Heading from './Heading'
import List from './List'
const Home = () => {
  return (
    <div>
      <Heading/>
      <table className='table'>
        <thead className='thead-dark'>
            {generateHeader()}
        </thead>
        <List/>
      </table>
    </div>
  )
}

function generateHeader() {
    return (
      <tr>
        <th scope='col'>id</th>
        <th scope='col'>Name</th>
        <th scope='col'>Description</th>
        <th scope='col'>Prize</th>
        <th scope='col'>Category</th>
      </tr>
    )
  }

export default Home
