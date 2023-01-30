import { PrismaClient } from "@prisma/client";

import Search_Bar from "./Search_Bar";
import Small_Listing from "./Small_Listing";

function Home_Container({ listings }){
    return (
        <div className="flex flex-col container static w-4/5">
            <div className="border relative p-5">
                <Search_Bar/>
            </div>
            <div className="border">VIP Listings
                <div className="flex flex-row">
                    {listings?.map((listing, i) => (
                        <Small_Listing car={listing} key={i} className="space-x-30"/>
                    ))
                    }
                </div>
            </div>
            <div className="border">TOP Listings
                <div className="flex flex-row">
                    {listings?.map((listing, i) => (
                        <Small_Listing car={listing} key={i} className="space-x-30"/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home_Container;
                