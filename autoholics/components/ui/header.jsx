import Image from "next/image";
import Link from "next/link";

function Header(){
    return (
        <div className="border flex flex-wrap w-4/5 relative container justify-between">
            <div className="flex space-x-2 flex-wrap">
                <div className="">
                    <Image className="" src="/SVG/logo.svg" width="100" height="50" alt="logo"></Image>
                </div>
                <div className="">
                    <h1 className="font-mono text-2xl text-purple-theme"><Link href="/">Autoholics</Link></h1>
                    <h3 className="font-sans text-sm text-purple-theme">Smoking tyres, happy buyers</h3>
                </div>
            </div>
            <div className="flex flex-col place-items-center inset-y-0 right-0">
                <div className="border w-10 h-10"></div>
                <button className="font-mono text-md text-purple-theme border">Sign Up</button>
            </div>
        </div>
    );
};
export default Header;