import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import AdminClientListPage from './pages/Admin/ClientList';
import AdminClientFormPage from './pages/Admin/ClientForm';
import AdminProductFormPage from './pages/Admin/ProductForm';
import AdminProductListPage from './pages/Admin/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/admin/clientes" exact component={AdminClientListPage} />
      <Route path="/admin/clientes/novo" exact component={AdminClientFormPage} />
      <Route path="/admin/clientes/:id/edit" exact component={AdminClientFormPage} />

      <Route path="/admin/produtos" exact component={AdminProductListPage} />
      <Route path="/admin/produtos/novo" exact component={AdminProductFormPage} />
      <Route path="/admin/produtos/:id/edit" exact component={AdminProductFormPage} />
    </BrowserRouter>
  );
}

export default App;
