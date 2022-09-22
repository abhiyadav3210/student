import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import "./components/app.css"

import Readonlyrow from "./components/Readonlyrow";
import Edittablerow from "./components/Edittablerow";
const App = () => {
  let [contact, setcontacts] = useState([]);
  let [addformdata, setaddformdata] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    gender: "",
  });
  let [editformdata,seteditformdata]=useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    gender: "",
  })
  let [editcontactid,seteditcontactid]=useState(null)
 
  function handleaddformchange(event) {
    event.preventDefault();
    let fieldname = event.target.getAttribute("name");
    let fieldvalue = event.target.value;
    let newformdata = { ...addformdata };
    newformdata[fieldname] = fieldvalue;
    setaddformdata(newformdata);
  }

  function handleeditformchange(event)
  {event.preventDefault()
    let fieldname=event.target.getAttribute("name")
    let fieldvalue=event.target.value
    let newformdata={...editformdata}
        newformdata[fieldname]=fieldvalue
        seteditformdata(newformdata);
  }
  function handleformsubmit(event) {
    event.preventDefault();
    let newcontact = {
      id: nanoid(),
      fullname: addformdata.fullname,
      email: addformdata.email,
      phonenumber: addformdata.phonenumber,
      address: addformdata.address,
      gender: addformdata.gender,
    };
    let contacts = [...contact, newcontact];
    setcontacts(contacts);
  }

function handleeditformsubmit(event)
{
  event.preventDefault()
  let editedcontact={
    id:editcontactid,
    fullname:editformdata.fullname,
    email:editformdata.email,
    phonenumber:editformdata.phonenumber,
    address:editformdata.address,
    gender:editformdata.gender
  }
  let newcontacts=[...contact]
  let index=contact.findIndex(function(contact)
  {
    return contact.id===editcontactid
  })
  newcontacts[index]=editedcontact
  setcontacts(newcontacts)
  seteditcontactid(null)
}

 function handleeditclick(event,contact)
 {
    event.preventDefault()
    seteditcontactid(contact.id);
    let formvalues={
      fullname:contact.fullname,
      email:contact.email,
      phonenumber:contact.phonenumber,
      address:contact.address,
      gender:contact.gender
    }
    seteditformdata(formvalues)
 }

 function handlecancelclick()
 {
  seteditcontactid(null)
 }

function handledeleteclick(contactid)
{
  let newcontacts=[...contact]
  let index=contact.findIndex(function(contacts)
  {
    return contacts.id===contactid
  })
  newcontacts.splice(index,1);
  setcontacts(newcontacts)
}
  return (
    <>
      <form onSubmit={handleformsubmit}>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          name="fullname"
          onChange={handleaddformchange}
        />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
          onChange={handleaddformchange}
        />
        <br />
        <label htmlFor="">Phone number</label>
        <br />
        <input
          type="number"
          placeholder="Enter your number"
          id="phone"
          name="phonenumber"
          onChange={handleaddformchange}
        />
        <br />
        <label htmlFor="">Address</label>
        <br />
        <textarea
          name="address"
          id="address"
          placeholder="Enter your address"
          onChange={handleaddformchange}
        ></textarea>
        <br />
        <label htmlFor="">Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleaddformchange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleaddformchange}
        />
        Female <br />
        <button type="submit">click</button>
      </form>
 
      <table>
        <thead>
          <th>name</th>
          <th>email</th>
          <th>phone number</th>
          <th>address</th>
          <th>Gender</th>
          <th>Action</th>
        </thead>
        <tbody>
          {contact.map(function (ele) {
         
              return(
                <>
                {
                  editcontactid===ele.id?(<Edittablerow editformdata={editformdata} handleeditformchange={handleeditformchange} handleeditformsubmit={handleeditformsubmit} handlecancelclick={handlecancelclick} />):(<Readonlyrow ele={ele} handleeditclick={handleeditclick} handledeleteclick={handledeleteclick} />)
                }
                
                
                
              
                </>
              )
             
          })}
        </tbody>
      </table>
     
    </>
  );
};
export default App;
