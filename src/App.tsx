import { PDFViewer } from "@react-pdf/renderer";
import MainDocument from "./MainDocument";

const App = () => (
  <PDFViewer
    style={{
      width: "100%",
      height: "100vh",
      border: "none",
      display: "flex",
    }}
  >
    <MainDocument />
  </PDFViewer>
);

export default App;
