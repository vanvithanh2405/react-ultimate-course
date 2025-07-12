import { Link, Outlet } from 'react-router';
import { invoiceData } from './mock/invoiceData';

function Invoice() {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "1px solid", padding: "1rem" }}>
        {invoiceData.map(data => (
          <Link 
            to={`/invoice/${data.number}`}
            style={{ display: "block", margin: "1rem 0px" }}
          >
            {data.name}
          </Link>
        ))}
      </nav>
      <div style={{ padding: "1rem" }}>
        {/* <div>Select an invoice</div> */}
        <Outlet />
      </div>
    </div>

  )
}

export default Invoice