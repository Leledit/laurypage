import { Benefits } from "../component/benefits";
import { CommonQuestions } from "../component/commonQuestions";
import { Container } from "../component/container";
import { Header } from "../component/header";
import { NecessaryInvestment } from "../component/necessaryInvestment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimony } from "../component/testimony";
function App() {
  return (
    <>
      <Header/>
      <Benefits/>
      <Container/>
      <NecessaryInvestment/>
      <CommonQuestions/>
      <Testimony/>
    </>
  );
}

export default App;