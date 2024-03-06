import TopNav from './Components/Menu/navbar.html';
import FooterBottom from './Components/Footer/footer.html';
import Body from './Components/Body/body.html';
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';



function App() {
  return (
    <BrowserRouter>
      <div className='background-all'>
        <TopNav/>
        <Body/>
      </div>
      <FooterBottom/>
    </BrowserRouter>
  );
}

export default App;
