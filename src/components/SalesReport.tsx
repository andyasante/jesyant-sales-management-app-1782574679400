import React, { useEffect, useState } from 'react';
import { fetchSalesReports } from '../services/api';

const SalesReport: React.FC = () => {
  const [reports, setReports] = useState<{ id: number; date: string; totalSales: number; transactionCount: number; }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await fetchSalesReports();
        setReports(data);
      } catch (err) {
        setError('Failed to fetch sales reports');
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Sales Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Sales</th>
            <th>Number of Transactions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.date}</td>
              <td>{report.totalSales}</td>
              <td>{report.transactionCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;