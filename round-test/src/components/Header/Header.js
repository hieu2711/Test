import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"
function Header() {
    return ( 
        <div className="flex justify-between flex-col sm:flex-row
         bg-cl_bg_black sm:h-[80px] text-[14px] text-cl_white items-center px-12 h-auto pt-2 sm:pt-0
         ">
             {/*LOGO */}
            <div>
                <img src={logo} alt="logo" className="object-contain"/>
            </div>
             {/*FUNTION */}
            <div>
                <div className="flex flex-col gap-4 sm:flex-row uppercase mt-2 sm:mt-0" >
                    <Link href="">introduction</Link>
                    <Link href="">solution</Link>
                    <Link href="">rate plan</Link>
                    <p className="bg-cl_white border-r-2 border-cl_white hidden sm:block"></p>
                    <Link href="">login</Link>
                    <Link href="" className="pb-2 sm:pb-0">apply for free use</Link>
                </div>
            </div>
        </div>
     );
}

export default Header;