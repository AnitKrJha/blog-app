import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Tags from "./routes/Tags/tags.component";
import Categories from "./routes/Categories/categories.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Tags" element={<Tags />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default App;
