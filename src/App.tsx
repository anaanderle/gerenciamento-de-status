import { GlobalStyle } from "./ui/styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ManageScreen } from "./ui/screens/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <ManageScreen />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
