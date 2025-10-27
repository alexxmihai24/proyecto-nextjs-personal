import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { IconName } from "react-icons/go";
function Header() {
    return (

        <div className="navbar bg-base-500 shadow-sm">

            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Bienvenido </Link>
                <ThemeSelect />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/pagina1">Paisajes</Link>
                    </li>
                    <li>
                        <Link href="/pagina2">Reloj</Link>
                    </li>


                    <li>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">Otras páginas</div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <li>
                                    <Link href="/pagina3">Calendraio</Link>
                                </li>
                                <li>
                                    <Link href="/pagina4">Vlad</Link>
                                </li>
                                <li>
                                    <Link href="/pagina5">Tradiciones</Link>
                                </li>
                            </ul>
                        </div>
                    </li>



              


                </ul>
            </div>
        </div>


    );
}

export default Header;