import logo from './logo.svg';
import './App.css';
import { Header, Left_Article, Right_Article, Footer, } from './components';
import { Mobile_Header } from './components/mobile-header/mobile-header';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 320px)'
  });

  return (
    <div className="App">
      {isMobile ? <Mobile_Header /> : <Header />}
      <div className='articles'>
        <Left_Article />
        <Right_Article isMobile={isMobile}/>
      </div>
      <Footer />

    </div>
  );
}

export default App;
