import InvoiceInfo from "../Components/Invoice/InvoiceInfo";
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div>
      <InvoiceInfo invoice={from} adminPage={false} />
    </div>
  );
};

export default Invoice;
