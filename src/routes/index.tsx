import {Route, Routes} from "react-router-dom";
import {routesData} from "./routesData";
import NotFoundPage from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            {
                routesData.map(route => (<Route key={route.path} path={route.path} element={route.element}/>))
            }
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    )
}

export default AppRoutes;