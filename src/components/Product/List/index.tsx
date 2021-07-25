import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Product } from '../../../models/product'
import Button from '../../Button'
import Card from '../../Card'
import Grid from '../../Grid'

const ProductList = () => {

  const location = useHistory();

  const [products, setProducts] = useState<Product[]>()

  function findProducts() {
    const data = new Product().find();
    setProducts(data);
  }

  useEffect(() => {
    findProducts();
  }, [])

  function to(id: any) {
    location.push('/admin/produtos/' + id + '/edit');
  }

  function handleRemove(id: string) {
    const aux = window.confirm('Voce realmente deseja remover este registro?');
    if (aux) {
      const p = new Product();
      p.id = id;
      p.remove();
      findProducts();
    } else {
      return;
    }
  }

  return (
    <>
      <Grid cols="1fr 1fr 1fr 1fr" jc="space-between" auto={false}>
        {products && products?.map((item, key) => (
          <Card key={key} bg="pink" w="auto" p={10}>
            <div style={{ textAlign: 'center' }}>
              <img src={item.imgUrl} width="100" alt="Imagem do Produto"/>
            </div>
            {item.name}<br />
            <i>R${item.price}</i><br />
            <strong>Estoque:</strong>{item.stock}<br /><br />
            <Grid columns={2} size="1fr" gg={10} auto={true}>
              <Button onClick={() => to(item.id)}>Editar</Button>
              <Button color="danger" onClick={() => handleRemove(item.id)}>Remover</Button>
            </Grid>
          </Card>
        ))}

        {products?.length === 0 && <h4>Nenhum produto cadastrado!</h4>}
      </Grid>
    </>
  )
}

export default ProductList
