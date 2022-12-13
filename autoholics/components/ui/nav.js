import Link from "next/link";

function Nav(){
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/search">Search</Link></li>
                <li><Link href="/">Post</Link></li>
                <li><Link href="/">Dealers</Link></li>
                <li><Link href="/">Calculator</Link></li>
            </ul>
        </div>
    );
};
export default Nav;