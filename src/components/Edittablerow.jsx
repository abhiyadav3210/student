
import React from 'react'

function Edittablerow({editformdata,handleeditformchange,handleeditformsubmit,handlecancelclick}) {
  return (
   <>
   <tr>
    <td><input type="text"  required placeholder='Enter your name' name='fullname' onChange={handleeditformchange} value={editformdata.fullname} /></td>
    <td><input type="text" placeholder='write email' name='email' onChange={handleeditformchange} value={editformdata.email} /></td>
    <td><input type="text" placeholder='write phone no.' name='phonenumber' onChange={handleeditformchange} value={editformdata.phonenumber}/></td>
    <td><input type="text" placeholder='enter address' name='address' onChange={handleeditformchange} value={editformdata.address}/></td>
    <td><input type="text" placeholder='enter gender' name='gender' onChange={handleeditformchange} value={editformdata.gender}/></td>
    <td><button type='submit' onClick={handleeditformsubmit}>Save</button>
    <button type='button' onClick={handlecancelclick}>Cancel</button></td>
   </tr>

   </>
  )
}

export default Edittablerow;
