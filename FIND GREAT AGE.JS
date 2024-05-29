
// FIND GREATOR AGE IN ARRAY 

import React from "react";

function AgeFinder() {
  const ages = [3, 10, 18, 20, 45, 67, 464, 5, 43];
  const foundAge = ages.filter((age) => age >= 10);

  return (
    <div>
      <p>First age greater than or equal to 10: {foundAge.join(", ")}</p>
    </div>
  );
}

export default AgeFinder;