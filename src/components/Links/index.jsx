import { NavLink } from "react-router"
import styles from "./Links.module.scss"

function Links() {
    const pages = [
        { id: 'home', to: "/", label: "Home" },
        { id: 'counter', to: "/counter", label: 'Counter' },
        { id: 'todo', to: "/todo", label: 'Todo' },
        { id: 'profile', to: "/profile", label: 'Profile' },
        { id: 'products', to: "/products", label: 'Products' },
        { id: 'comments', to: "/comments", label: 'Comments' },
        { id: 'weather', to: "/weather", label: 'Weather' },
    ];

    return (
        <aside className="page-navigation">
            {pages.map((link, index) => {
                return (
                    <NavLink
                        key={index}
                        to={link.to}
                        className={({ isActive }) => isActive
                            ? `page-navigation-item ${styles.active}`
                            : "page-navigation-item"
                        }
                    >
                        {link.label}
                    </NavLink>
                )
            })}
        </aside>
    )
}

export default Links;