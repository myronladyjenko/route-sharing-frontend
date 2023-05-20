import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Homepage";
import { Editor } from "./Screens/Editor";

export function AppRoutes(){
    return(<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Editor />}/>
    </Routes>)
}