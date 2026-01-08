
import './App.css'
import Form from './components/Form';
import Header from './components/Header';

function App() {
 

  return (
     <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./background3.png')" }}
    >
      <div className="flex flex-col md:flex-row w-[93%] md:w-[65%] h-[80vh] min-h-[440px] rounded-[10px] shadow-lg overflow-hidden bg-white/10 ">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App
