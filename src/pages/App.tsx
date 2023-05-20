import { Benefits } from "../component/benefits";
import { Container } from "../component/container";
import { Header } from "../component/header";
import { NecessaryInvestment } from "../component/necessaryInvestment";

function App() {
  return (
    <>
      <Header/>
      <Benefits/>
      <Container/>
      <NecessaryInvestment/>
    </>
  );
}

export default App;