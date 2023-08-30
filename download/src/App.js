import FileSaver from "file-saver";
import { imageUri } from "./config";
import axios from "axios";

function App() {
  const onDownload = async () => {
    // const response = await fetch(imageUri);
    const response = await axios.get(imageUri, { responseType: "blob" });
    FileSaver.saveAs(response.data);
  };
  return <button onClick={onDownload}>Download</button>;
}

export default App;
