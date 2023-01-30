import { PrismaClient } from '@prisma/client';
import * as React from 'react';
import { useState } from 'react';

import Dropdown from "./Dropdown";

/*export async function getServerSideProps(){
    const prisma = new PrismaClient();
    const listings = await prisma.listing.findUnique({
        where: {
            brand: "BMW",
        },
    })

    return {
        listings,
    }
}

 onSubmit={getServerSideProps()}
*/

function Search_Bar(){
    return(
        <div className="flex flex-row p-5">
            <Dropdown/>
            {/*
                const Car = () => {
                    const [brand, setBrand] = useState('');
                    const [model, setModel] = useState('');
                    const [trim, setTrim] = useState('');

                    const brands = ['Audi', 'BMW', 'Mercedes-Benz', 'Ford'];
                    const models = {
                        'Audi': ['A3', 'A4'],
                        'BMW': ['3 series', '5 series'],
                        'Mercedes-Benz': ['C klasse', 'S klasse'],
                        'Ford': ['Cougar', 'Fiesta'],
                    };
                    const trims = {
                        'A3': ['1.9TDI', 'S-Line'],
                        'A4': ['1.8T', 'S-Line'],
                        '3 series': ['323i', 'M3'],
                        '5 series': ['535d', 'M5'],
                        'C klasse': ['320CDI', 'AMG 55'],
                        'S klasse': ['400', 'AMG 63'],
                        'Cougar': ['2.5V6'],
                        'Fiesta': ['ST'],
                    };

                    const handleBrandChange = (event) => {
                        setBrand(event.target.value);
                        setModel('');
                        setTrim('');
                    };

                    const handleModelChange = (event) => {
                        setModel(event.target.value);
                        setTrim('');
                    };

                    const handleTrimChange = (event) => {
                        setTrim(event.target.value);
                    };

                    return (
                        <div>
                            <select id="options" value={brand} onChange={handleBrandChange}>
                                <option value="">Select Brand</option>
                                {brands.map((brand) => (
                                    <option key={brand} value={brand}>
                                    {brand}
                                    </option>
                                ))}
                            </select>
                            {brand && (
                                <>
                                    <select id="sub-options" value={model} onChange={handleModelChange}>
                                        <option value="">Select Model</option>
                                        {models[brand].map((model) => (
                                            <option key={model} value={model}>
                                                {model}
                                            </option>
                                        ))}
                                    </select>
                                    {model && (
                                        <>
                                            <select id="sub-sub-options" value={trim} onChange={handleTrimChange}>
                                                <option value="">Select Trim</option>
                                                {trims[model].map((trim) => (
                                                    <option key={trim} value={trim}>
                                                        {trim}
                                                    </option>
                                                ))}
                                            </select>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    );
                };
            **/}
            <button className="justify-end right-0 border" type="submit">Search</button>
        </div>
    );
};
export default Search_Bar;