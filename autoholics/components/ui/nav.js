import Link from "next/link";

function Nav(){
    return (
        <div>
            <ul className="flex flex-nowrap gap-7">
                <li className="flex-auto w-1/5"><Link href="/">Home</Link></li>
                <li className="flex-auto w-1/5"><Link href="/search">Search</Link></li>
                <li className="flex-auto w-1/5"><Link href="/">Post</Link></li>
                <li className="flex-auto w-1/5"><Link href="/">Dealers</Link></li>
                <li className="flex-auto w-1/5"><Link href="/">Calculator</Link></li>
            </ul>
        </div>
    );
};
export default Nav;