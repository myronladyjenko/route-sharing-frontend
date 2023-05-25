import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Homepage";
import { Editor } from "./Screens/Editor";
import { Collection } from "./Screens/Collection";

export function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Editor />} />
        <Route exact path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}
