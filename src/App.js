import { Provider } from "react-redux";
import "./App.css";
import Addtodo from "./components/Addtodo";
import Displaytodo from "./components/Displaytodo";
import Navbar from "./components/Navbar";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="container">
          <Addtodo />
          <Displaytodo />
        </div>
      </Provider>
    </>
  );
}

export default App;
