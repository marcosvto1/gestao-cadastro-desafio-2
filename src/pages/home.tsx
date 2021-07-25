import * as React from 'react';
import Card from '../components/Card';
import Dashboard from '../components/Dashboard';
import Template from '../components/Template';
import { Client } from '../models/client';
import { Product } from '../models/product';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {

  const [countProducts, setCountProducts] = React.useState<number>(0);
  const [countClients, setCountClients] = React.useState<number>(0);

  React.useEffect(() => {
    const count = new Client().find().length;
    setCountClients(count);
  },[])

  React.useEffect(() => {
    const count = new Product().find().length;
    setCountProducts(count);
  },[])

  return (
    <Template>
      <Dashboard countClient={countClients} countProducts={countProducts} />
    </Template>
  );
}
