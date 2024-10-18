import Reading from "./Reading";
import Box from "./Box";
import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
function Home() {
 

  return (
    <div>
      {/* {reading && reading.map((read) => <p key={read._id}>{read.title}</p>)} */}
      <Reading />
      <Box />
    </div>
  );
}

export default Home;
