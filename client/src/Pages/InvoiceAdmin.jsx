import InvoiceInfo from "../Components/Invoice/InvoiceInfo";
import { useLocation } from "react-router-dom";

const InvoiceAdmin = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div>
      <InvoiceInfo invoice={from} adminPage={true} />
    </div>
  );
};

export default InvoiceAdmin;
