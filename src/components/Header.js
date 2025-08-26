import Link from "next/link";
import ThemeSelect from "./ThemeSelect";

function Header() {
    return (
        // <div className="flex gap-4 p-4 items-center">
        //     <ThemeSelect />
        //     <Link href="/">Home</Link>
        //     <Link href="/page1">Page 1</Link>
        //     <Link href="/page2">Page 2</Link>
        // </div>



        <div className="navbar bg-base-500 shadow-sm">

            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Inicio</Link>
                <ThemeSelect />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/pagina1">Página 1</Link>
                    </li>
                    <li>
                        <Link href="/pagina2">Página 2</Link>
                    </li>


                    <li>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">Otras páginas</div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <li>
                                    <Link href="/pagina3">Página 3</Link>
                                </li>
                                <li>
                                    <Link href="/pagina4">Página 4</Link>
                                </li>
                                <li>
                                    <Link href="/pagina5">Página 5</Link>
                                </li>
                            </ul>
                        </div>
                    </li>



                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn">Otras páginas</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <Link href="/page3">Page 3</Link>
                            </li>
                            <li>
                                <Link href="/page4">Page 4</Link>
                            </li>
                        </ul>
                    </div> */}


                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content fixed top-0 right-0 z-10">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button size-15 rounded-sm">Drawer</label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><Link href="/pagina1">Pagina 1</Link></li>
                                <li><Link href="/pagina2">Pagina 2</Link></li>
                            </ul>
                        </div>
                    </div>


                </ul>
            </div>
        </div>


    );
}

export default Header;