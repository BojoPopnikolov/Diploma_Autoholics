import Image from "next/image";
import Link from "next/link";

function Header(){
    return (
        <div className="flex flex-wrap w-4/5 relative container justify-between">
            <div className="flex space-x-2 flex-wrap">
                <div className="">
                    <Link href="/"><Image className="" src="/SVG/logo.svg" width="100" height="50" alt="logo"></Image></Link>
                </div>
                <div className="">
                    <h1 className="font-mono text-2xl text-purple-theme"><Link href="/">Autoholics</Link></h1>
                    <h3 className="font-sans text-sm text-purple-theme"><Link href="/">Smoking tyres, happy buyers</Link></h3>
                </div>
            </div>
            <Link href="/sign_up">
                <div className="flex flex-col place-items-center inset-y-0 right-0">
                    <div className="w-10 h-10">
                        <Image src="/profile.png" width="40" height="40"></Image>
                    </div>
                    <button className="font-mono text-md text-purple-theme border">Sign Up</button>
                </div>
            </Link>        
        </div>
    );
};
export default Header;