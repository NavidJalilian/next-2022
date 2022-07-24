import "../styles/globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
}

export default MyApp;
