import React from "react";

const SearchTransaction = ({ searchParams,onSearchInput})=>{
  console.log("onSearchInput is a function:",typeof onSearchInput ==="function");

  return(
    <div className="search-container">
      <i className="search icon"></i>
      <input
      type="text"
      placeholder="Search your Recent Transactions"
      value={searchParams}
      onChange ={(e)=>onSearchInput(e.target.value)}
      />
    </div>
    
  );
};
export default SearchTransaction;