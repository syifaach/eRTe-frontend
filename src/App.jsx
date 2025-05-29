import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { routes } from "./router";

function AppRouter() {
  const element = useRoutes(routes);
  return element;
}

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </>
  );
}

export default App;
