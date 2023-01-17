import * as React from 'react';

import Dropdown from "./Dropdown";

function Search_Bar(){
    return(
        <div className="flex flex-row p-5">
            <Dropdown/>
            <input type="text" placeholder="Keywords"/>
            <button className="justify-end right-0">Search</button>
        </div>
    );
};
export default Search_Bar;