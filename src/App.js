import TopNav from './Components/Menu/navbar.html';
import FooterBottom from './Components/Footer/footer.html';
import Body from './Components/Body/body.html';
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <Body/>
      <FooterBottom/>
    </BrowserRouter>
  );
}

export default App;
