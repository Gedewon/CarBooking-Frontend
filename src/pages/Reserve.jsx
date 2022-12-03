import React from 'react';

function Reserve() {
  return (
    <div>
      <div>
        <h1>Reserve Cars.</h1>
        <p>
          Please Select a car to reserve form the provided lists.
        </p>
      </div>
      <form>
        <h3>
          Which Car do you want to reserve?
        </h3>
        <button type="submit">
          Reserve Car
        </button>
      </form>
    </div>
  );
}

export default Reserve;
