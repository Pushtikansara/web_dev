
import "./App.css"
import Test from "./Component/Test";  
import PrintNames from "./Component/PrintNames";
const bgColor="red";
const clr="White";

function App() {
  return (
    <>
      <h1
      style={{
        backgroundColor:bgColor,
      }}>hello world</h1>
      <h2>Hello</h2>
      <Test/>
      <PrintNames name="Pushti" des="CEO"/>
      <PrintNames name="Mahek " des="CTO"/>
    </>
  );
}
export default App;