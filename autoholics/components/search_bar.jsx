import * as React from 'react';

import Dropdown from "./dropdown";

function Search_bar(){
    return(
        <div>
            {/*<button onClick={handleOpen} type="button">Brand</button>
            {open ? <div>
                <ul className="hidden">
                    <li>Audi</li>
                    <li>BMW</li>
                    <li>Chevrolet</li>
                    <li>Dodge</li>
                    <li>Ford</li>
                    <li>Ferrari</li>
                </ul>
            </div> : 
            <div></div>}
            */}
            <Dropdown tag="Brand" item={["Audi", "BMW", "Chevrolet"]}/>
            <Dropdown tag="Model" item={["A4", "3 series", "Camaro"]}/>
        </div>
    );
};
export default Search_bar;