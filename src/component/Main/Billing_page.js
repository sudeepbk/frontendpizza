import React, { useState } from "react";

export default function Billing_page({ match, sudeep }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  console.log(sudeep);

  return (
    <div>
      <p>{sudeep}</p>
    </div>
  );
}
