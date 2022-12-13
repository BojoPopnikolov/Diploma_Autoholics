import Image from "next/image";

import Nav from "./nav";

function Header(){
    return (
        <div>
            <section>
                <div>
                    <Image src="/SVG/logo.svg" width="150" height="100" alt="logo"></Image>
                </div>
                <div>
                    <h1>Autoholics</h1>
                </div>
            </section>
            <Nav/>
        </div>
    );
};
export default Header;