import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Button from '../../Button'
import Grid from '../../Grid'
import FormInput from '../../Input'
import { Product } from '../../../models/product'

interface Props {

}

const initialForm = {
  name: '',
  description: '',
  stock: 0,
  price: 0,
  imgUrl: ''
}

const ProductForm = (props: Props) => {

  const [errors, setErrors] = useState<any[]>([]);
  const [form, setForm] = useState(initialForm);
  const { id } = useParams<{ id: string }>();


  useEffect(() => {
    const products = new Product().find();
    setForm({ ...(products.find((item: any) => item.id === id)) })
  }, [id]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<any>) {

    e.preventDefault();
    const client = new Product(
      form.name,
      form.description,
      form.stock,
      form.imgUrl,
      form.price,
    );

    let res = null;
    if (!id) {
      res = client.save();
      actionForNew(res);
    } else {
      client.id = id;
      res = client.update()
      actionForEdit(res);
    }
  }

  function actionForNew(res: any) {
    if (res) {
      setErrors(res);
    } else {
      alert('Produto cadastrado com sucesso');
      setForm({ ...initialForm });
      setErrors([]);
    }
  }
  function actionForEdit(res: any) {
    if (res) {
      setErrors(res);
    } else {
      alert('Produto atualizado com sucesso');
      setErrors([]);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      {errors && errors.map(e => (<p style={{ color: 'red' }}>{e}</p>))}

      <Grid cols={`200px 100px`} jc="space-between" auto={false}>
        <h3>Cadastrar</h3>
        <NavLink to={"/admin/produtos"}>Voltar</NavLink>
      </Grid>

      <Grid columns={2} size="auto" auto={true}>
        <FormInput
          name="name"
          label="Nome"
          value={form.name}
          onChange={(e) => handleValue(e)}
        />
        <FormInput
          name="description"
          label="Descrição"
          type="text"
          value={form.description}
          onChange={(e) => handleValue(e)}
        />
      </Grid>

      <Grid columns={3} size="auto" auto={true}>
        <FormInput
          name="price"
          label="Preço"
          value={form.price}
          onChange={(e) => handleValue(e)}
        />

        <FormInput
          name="stock"
          label="Estoque"
          value={form.stock}
          onChange={(e) => handleValue(e)}

        />

        <FormInput
          name="imgUrl"
          label="Imagem"
          value={form.imgUrl}
          onChange={(e) => handleValue(e)}

        />
      </Grid>


      <Grid>
        <br />
        <Button>Salvar</Button>
      </Grid>
      <br />
    </form>
  )
}

export default ProductForm;
