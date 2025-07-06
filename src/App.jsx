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
import { ThemeProvider, createTheme } from "@mui/material";
import Topbar from "./core/components/Topbar/Topbar.jsx";
import Sidebar from "./core/components/Sidebar/Sidebar";
import { useState } from "react";
import { drawerWidth } from "./core/constants";

function AppRouter() {
  const element = useRoutes(routes);
  return element;
}

const router = createBrowserRouter(routes);

const THEME = createTheme({
  typography: {
    fontFamily: `"Outfit", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Sidebar open={open} />
          <Topbar handleDrawer={handleDrawer} open={open} />

          <div style={{ display: "flex", flex: 1 }}>
            <div
              style={{
                position: "absolute",
                left: open ? `${drawerWidth}px` : 0,
                width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
                transition: "left 0.2s",
                top: "70px",
                padding: "20px",
                boxSizing: "border-box",
                overflow: 'auto',
                backgroundColor: 'ghostwhite'
              }}
            >
              <AppRouter />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
