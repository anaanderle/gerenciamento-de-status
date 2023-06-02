import "./App.css";
import { ManageScreen } from "./ui/screens/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ManageScreen />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
