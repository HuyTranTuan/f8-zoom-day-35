import {
    Routes,
    Route,
    HashRouter,
} from "react-router"

import Home from "../../pages/Home"
import Comments from "../../pages/Comments"
import Counter from "../../pages/Counter"
import Products from "../../pages/Products"
import Todo from "../../pages/Todo"
import Weather from "../../pages/Weather"
import Profile from "../../pages/Profile"
import Button from "../../pages/Buttons"
import Links from "../../components/Links"

function AppRoutes() {
    return (
        <HashRouter>
            <Links />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/buttons" element={<Button />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default AppRoutes