import Link from "next/link";

function Nav(){
    return (
        <nav className="border container flex flex-wrap w-4/5 place-content-center mx-auto space-x-12 mb-7">
            {[
                ['Home', '/'],
                ['Search', '/search'],
                ['Post', '/Post/post'],
                ['Dealers', '/'],
                ['Calculator', '/'],
            ].map(([title, url]) => (
                <Link href={url} className="text-purple-theme hover:bg-slate-100 px-2 rounded-md">{title}</Link>
            ))}
        </nav>
    );
};
export default Nav;