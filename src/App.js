
import { CustomProvider } from "./components/contexto";
import { FormularioCadastro } from "./components/form";
import { Hello } from "./components/hello";

function App() {


  return (
    <div className="App">
      <CustomProvider>
        <FormularioCadastro />
        <Hello />
      </CustomProvider>
    </div>
  );
}

export default App;
