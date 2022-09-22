
const Readonlyrow=({ele,handleeditclick,handledeleteclick})=>{
   
    return(
        <>
         <tr>
                  <td> {ele.fullname} </td>
                  <td> {ele.email} </td>
                  <td> {ele.phonenumber} </td>
                  <td> {ele.address} </td>
                  <td> {ele.gender} </td>
                <td><button type="button" onClick={function(event){
              handleeditclick(event,ele)
                }}>Edit</button>
                <button type="button" onClick={function()
                {
                    handledeleteclick(ele.id)
                }}>Delete</button></td>
                </tr>
        </>
    )
}
export default Readonlyrow;