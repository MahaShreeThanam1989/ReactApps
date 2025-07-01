import { useState } from "react";

function Footer() {
const year = 2025;
const today = new Date();
return (
    <>
   <div>
   
  <footer>Copyrights @ bookshelf,{year-1}</footer>
    <p>{today.toDateString()}</p>
       </div>
    </>
);

}

export default Footer