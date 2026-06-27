import React from 'react';
import ProductList from './components/ProductList';
import SalesReport from './components/SalesReport';
import CustomerManagement from './components/CustomerManagement';

const App: React.FC = () => {
  return (
    <div>
      <h1>Sales Management App</h1>
      <ProductList />
      <SalesReport />
      <CustomerManagement />
    </div>
  );
};

export default App;