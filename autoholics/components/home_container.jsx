import Search_bar from "./search_bar";

function Home_Container(){
    return (
        <div className="flex flex-col container static w-2/3">
            <div className="border">Search
                <Search_bar/>
            </div>
            <div className="border">VIP Listings</div>
            <div className="border">TOP Listings</div>
        </div>
    );
}
export default Home_Container;