import React from 'react'

const Tables = () => {
  return (
    <>
      <table className='u-full-width'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bob Cobb</td>
            <td>bcobb@net.com</td>
            <td>Boston</td>
          </tr>
          <tr>
            <td>Jim Jupe</td>
            <td>jupe@net.com</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Tables
