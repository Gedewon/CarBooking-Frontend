import React from 'react';

function Reserve() {

  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center py-16 ">
        <h1 className=" text-4xl font-bold text-center">Reserve Cars.</h1>
        <p className=" text-xs text-slate-400">
          Please Select a car to reserve form the provided lists.
        </p>
      </div>
      <form
        className=" px-8 flex flex-col gap-4"
      >
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Car do you want to reserve?
        </h3>
        <button type="submit" className="submit-button self-center">
          Reserve Car
        </button>
      </form>
    </div>
  );
}

export default Reserve;
