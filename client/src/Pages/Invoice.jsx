import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import InvoiceInfo from "../Components/Invoice/InvoiceInfo";
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div>
      <NavBar />
      <InvoiceInfo invoice={from} />
      <Footer />
    </div>
  );
};

export default Invoice;
