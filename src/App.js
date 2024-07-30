import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users";
import GoogleCallback from "./Pages/Auth/GoogleCallback";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Public Routes */}
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<GoogleCallback />} path="/auth/google/callback" />
        {/*Protected Routes */}
        <Route element={<Dashboard />} path="/dashboard">
          <Route element={<Users />} path="users" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
