import { NavLink, Link } from "react-router-dom"


export default function Header() {


    const links = [
        { name: "HOME", path: "/" },
        { name: "MILESTONE-1", path: "/milestone1" },
        { name: "MILESTONE-2", path: "/milestone2" },
        { name: "MILESTONE-3", path: "/milestone3" },
    ]


    return (
        <header>
            <div className="box-link">
                {links.map((l, i) => (
                    <Link
                        key={i}
                        className=""
                        to={l.path}>{l.name}</Link>
                ))}
            </div>
        </header>
    )
}