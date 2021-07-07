import './App.css';
import Button from "./components/button/Button";
import Users from "./components/users/Users";
import { Route } from "react-router-dom";

function App() {
  return (
      <>
        <Button />
        <Route path={'/users'} component={Users} />
      </>
  );
}

export default App;
