import { store } from "@redux/store";
import Text from "components/Text";
import Home from "pages/Home";
import { Provider } from "react-redux";
import Button from "ui/atoms/Button";

function App() {
  return (
    <Provider store={store}>
      <Text></Text>
      <Home></Home>
      <Button></Button>
    </Provider>
  );
}

export default App;
