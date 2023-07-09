import React from "react"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Table from "./Table";
function Tables(){
    return <MDBTable responsive>
    <MDBTableHead>
      <tr>
        <td><Table img = "https://bbst1.badabusiness.com/wp-content/uploads/2021/02/papad-and-pickle-380x214.jpg"/></td>     
        <td><Table img = "https://bbst1.badabusiness.com/wp-content/uploads/2021/02/papad-and-pickle-380x214.jpg"/></td>
        <td><Table img = "https://bbst1.badabusiness.com/wp-content/uploads/2021/02/papad-and-pickle-380x214.jpg"/></td>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <td><Table img = "https://sun04122000.github.io/SHG/images/LAXMI%20SAMOOH%20PURANPUR/LAXMI%20SAMOOH%20PURANPUR%20HANDICRAFTS/Woolen%20Door%20Hanging.jpeg"/></td>     
        <td><Table img = "https://sun04122000.github.io/SHG/images/LAXMI%20SAMOOH%20PURANPUR/LAXMI%20SAMOOH%20PURANPUR%20HANDICRAFTS/Big%20Yellow%20White%20Thali%20PLate%20Cover.jpeg"/></td>
        <td><Table img = "https://sun04122000.github.io/SHG/images/LAXMI%20SAMOOH%20PURANPUR/LAXMI%20SAMOOH%20PURANPUR%20HANDICRAFTS/Red%20Woolen%20Thali%20Plate%20Cover.jpeg"/></td>
      </tr>
      <tr>
      <td><Table img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDYYGHmPRCM1BUrHQ55H_ASULmI1sRK69rA&usqp=CAU"/></td>     
        <td><Table img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDYYGHmPRCM1BUrHQ55H_ASULmI1sRK69rA&usqp=CAU"/></td>
        <td><Table img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDYYGHmPRCM1BUrHQ55H_ASULmI1sRK69rA&usqp=CAU"/></td>
      </tr>
      
    </MDBTableBody>
  </MDBTable>
}
export default Tables;