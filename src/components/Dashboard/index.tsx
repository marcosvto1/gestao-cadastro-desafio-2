import * as React from 'react';
import Card from '../Card';
import Grid from '../Grid';

export interface IDashboardProps {
  countClient: number;
  countProducts: number;
}

export default function Dashboard ({ countClient, countProducts }: IDashboardProps) {
  return (
    <Grid cols="200px 200px" jc="space-around" auto={false}>
      <Card w="200px" bg="pink" p={10}>
        <div style={{ textAlign: 'center' }}>
        <h2>Clientes</h2>
        <h3>Qtd: {countClient}</h3>
        </div>
      </Card>

      <Card w="200px" bg="#eee" p={10}>
      <div style={{ textAlign: 'center' }}>
        <h2>Produtos</h2>
        <h3>Qtd: {countProducts}</h3>
        </div>
      </Card>
    </Grid>
  );
}
