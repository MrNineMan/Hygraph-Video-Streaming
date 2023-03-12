import 'Next/styles/globals.css';
import NavBar from "Next/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <main className={"max-w-[990px] mx-auto py-4"}>
        <NavBar />
        <Component {...pageProps} />
      </main>
  );
  
}
