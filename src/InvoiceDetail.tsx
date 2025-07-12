import React from 'react'
import { useParams } from 'react-router'
import { invoiceData } from './mock/invoiceData';

function InvoiceDetail() {
  const [invoice, setInvoice] = React.useState<any>(null);
  const { invoiceId } = useParams();

  React.useEffect(() => {
    async function fetchInvoiceDetail() {
      // call api
      const res = invoiceData;
      const item = res.find(item => item.number === Number(invoiceId))
      if (!item) return;
      setInvoice(item);
    }
    fetchInvoiceDetail();
  })

  if (!invoice) return null;

  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>
      <p>Santa Monica: {invoice.number}</p>
      <p>Due Date: {invoice.due}</p>
    </div>
  )
}

export default InvoiceDetail