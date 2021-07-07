import './App.css';
import Button from "./components/button/Button";
import Users from "./components/users/Users";
import { Route } from "react-router-dom";

export default function App() {
  return (
      <div>
        <Button />

        <Route path={'/users'} component={Users} />
      </div>
  );
}