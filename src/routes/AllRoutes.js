import {Route, Routes} from "react-router-dom";
import {CreatePost, HomePage, PageNotFound} from "../pages";
import {ProtectedRoute} from "./ProtectedRoute";

export const AllRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'create'} element={ <ProtectedRoute> <CreatePost/> </ProtectedRoute>  }  />
                <Route path={'*'} element={<PageNotFound/>}/>
            </Routes>
        </main>
    );
};