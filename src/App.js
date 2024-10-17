import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import ErrorPage from './pages/ErrorPage';
import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="/:shortenedUrl" element={<RedirectPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
