import FileSaver from "file-saver";
import { imageUri } from "./config";

function App() {
  const onDownload = async () => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    FileSaver.saveAs(blob);
  };
  return <button onClick={onDownload}>Download</button>;
}

export default App;
