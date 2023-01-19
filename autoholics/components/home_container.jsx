import Link from "next/link";

import Search_Bar from "./Search_Bar";
import Small_Listing from "./Small_Listing";

function Home_Container(){
    return (
        <div className="flex flex-col container static w-4/5">
            <div className="border relative p-5">
                <Search_Bar/>
            </div>
            <div className="border">VIP Listings
                <div className="flex flex-row">
                    {[
                        ['Ford', 'Cougar', '2.5V6'],
                        ['Audi', 'A4', 'S-line'],
                        ['BMW', '5 series', 'M5'],
                        ['Mercedes-Benz', 'C klasse', 'AMG 55'],
                    ].map(([brand, model, trim]) => (
                        <Link href={{
                            pathname: './listing',
                            query: {
                                brand:brand,
                                model:model,
                                trim:trim
                            }
                        }}><Small_Listing brand={brand} model={model} trim={trim} className="space-x-30"/></Link>
                    ))
                    }
                </div>
            </div>
            <div className="border">TOP Listings
                <div className="flex flex-row">
                    {[
                        ['BMW', '3 series', '323i'],
                        ['Audi', 'A4', 'S-line'],
                        ['BMW', '5 series', 'M5'],
                        ['Mercedes-Benz', 'C klasse', 'AMG 55'],
                    ].map(([brand, model, trim]) => (
                        <Link href={{
                            pathname: './article',
                            query: {
                                brands:brand,
                                models:model,
                                trims:trim
                            }
                        }}><Small_Listing brand={brand} model={model} trim={trim} className="space-x-30"/></Link>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Home_Container;