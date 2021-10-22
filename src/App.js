import "./App.css";
import {useRef} from 'react'

function App() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const csvToJson = () => {
    console.log(inputRef);
    console.log(inputRef.current.value);
    const csv = inputRef.current.value;
    const [firstLine, ...lines] = csv.split("\n");
    const output = lines.map(line =>
      firstLine.split(",").reduce(
        (curr, next, index) => ({
          ...curr,
          [next]: line.split(",")[index]
        }),
        {}
      )
    );
    console.log(output);
    outputRef.current.value=JSON.stringify(output);
  };
  return (
    <div className="App">
      <header className="App-header">CSV TO JSON</header>
      <main>
        <textarea id="w3review" name="w3review" rows="30" cols="50" ref={inputRef} placeholder="Enter csv text"></textarea>
        <br />
        <input type="submit" value="convert" className="submit" onClick={() => csvToJson()} />
        <br />
        <textarea id="w3review" name="w3review" rows="30" cols="50" ref={outputRef} placeholder="output"></textarea>
      </main>
    </div>
  );
}

export default App;
