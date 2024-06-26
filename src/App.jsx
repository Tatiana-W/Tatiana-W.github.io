import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogDetails from "./components/Pages/BlogDetails";
import Home from "./components/Pages/Home";
import Home3 from "./components/Pages/Home3";
import Spacing from "./components/Spacing";
import { ToastContainer } from 'react-toastify';
import WalletContext from "./contexts/walletContext";

function App() {
  return (
    <>
      <WalletContext>
      {/* <Header/> */}
      <Spacing lg='80' md='80'/>
      <Routes>
        <Route path="/" element={<Home3/>}/>
        {/* <Route path="/dApp" element={<Home/>}/> */}
        {/* <Route path="/blog/:id" element={<BlogDetails/>}/> */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      {/* <Footer/> */}
      <ToastContainer/>
      </WalletContext>
    </>
  );
}

export default App;
