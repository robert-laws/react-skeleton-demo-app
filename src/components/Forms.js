import React from 'react'

const Forms = () => {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input className='u-full-width' type="text" placeholder="Enter name" />
        </div>
        <div>
          <label htmlFor="">Membership</label>
          <select className="u-full-width" name="" id="">
            <option value="1">Membership One</option>
            <option value="2">Membership Two</option>
            <option value="3">Membership Three</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea className="u-full-width" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="u-pull-right">
          <label htmlFor="">
            <input type="checkbox"/>
            <span className="label-body">Subscribe to email</span>
          </label>
        </div>
        <div>
          <input className='button-primary' type="submit" value='Submit' />
        </div>
      </form>
    </>
  )
}

export default Forms
