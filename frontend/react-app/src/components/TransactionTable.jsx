import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../api";

const TransactionTable = ({ selectedMonth, searchQuery }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const params = { month: selectedMonth, search: searchQuery, page, perPage: 10 };
      const response = await fetchTransactions(params);
      setTransactions(response.data.transactions);
      setTotalPages(Math.ceil(response.data.total / 10));
    };
    fetchData();
  }, [selectedMonth, searchQuery, page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>{t.price}</td>
              <td>{new Date(t.dateOfSale).toLocaleDateString()}</td>
              <td>{t.isSold ? "Sold" : "Not Sold"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TransactionTable;
