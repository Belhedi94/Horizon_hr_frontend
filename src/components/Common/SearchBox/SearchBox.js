import React from 'react';

const SearchBox = ({filterInput, handleFilterChange}) => {
    return(
        <div className="col-md-3">
            <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search..."}
                className="form-control"
            />
        </div>
    );
};

export default SearchBox;