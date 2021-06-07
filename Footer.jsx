import React from "react";

function Footer() {
  var currYear = new Date().getFullyear();
  
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
