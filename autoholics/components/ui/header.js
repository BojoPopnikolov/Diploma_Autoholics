import Image from "next/image";
import Link from "next/link";

import Nav from "./nav";

function Header(){
    return (
        <div className="container mx-auto">
            <div className="flex w-full">
                <div>
                    <Image src="/SVG/logo.svg" width="100" height="50" alt="logo"></Image>
                </div>
                <div>
                    <h1 className="font-mono text-2xl"><Link href="/">Autoholics</Link></h1>
                    <h3 className="font-sans text-sm">Smoking tyres, happy buyers</h3>
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <button className="font-mono text-lg">Log In</button>
                    </div>
                    <div>
                        <button className="font-mono text-lg">Sign Up</button>
                    </div>
                </div>
            </div>
            <Nav/>
        </div>
    );
};
export default Header;