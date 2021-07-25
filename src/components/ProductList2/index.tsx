import * as React from 'react';
import styled from 'styled-components';
import { Product } from '../../models/product';
import Button from '../Button';
import Card from '../Card';

export interface IProductListProps {
  products: Product[];
  itemPerRow?: number;
}

export default function ProductList2 (props: IProductListProps) {
  return (
    <Wrapper columns={props.itemPerRow || 3}>
      {props.products.map((product: Product) => (
        <Card bg="white" w="350px" key={product.id} p={10}>
            {product.name}
            <br/>
            <Button>Adicionar ao carrinho</Button>
        </Card>
      ) )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{columns: number}>`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, max-content);
  justify-content: center;
  grid-gap: 1rem;
`;