import { useOutlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout() {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      {outlet}
      <Footer />
    </>
  );
}
