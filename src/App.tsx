import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import GlobalStyle from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Footer />
    </>
  )
}

export default App;
