import React from 'react'

const AddContact = () => {
  return (
    <div className="ui main">
        <h2>Add Contacts</h2>
        <form className='ui form'>
            <div className='field'>
                <label>Name</label>
                <input type="text" name="name" placeholder='name'/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type="text" name="name" placeholder='name'/>
            </div>
            <div>
                <button className='ui button blue'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddContact