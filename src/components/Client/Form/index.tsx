import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Client } from '../../../models/client'
import Button from '../../Button'
import Grid from '../../Grid'
import FormInput from '../../Input'

interface Props {

}

const initialForm = {
  name: '',
  email: '',
  cep: '',
  end: '',
  city: '',
  phone: '',
}

const ClientForm = (props: Props) => {

  const [errors, setErrors] = useState<any[]>([]);
  const [form, setForm] = useState(initialForm);
  const { id } = useParams<{ id: string }>();


  useEffect(() => {
    const clients = new Client().find();
    setForm({ ...(clients.find((item: any) => item.id === id)) })
  }, [id]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<any>) {

    e.preventDefault();
    const client = new Client(
      form.name,
      form.email,
      form.cep,
      form.end,
      form.city,
      form.phone
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
      alert('Cliente cadastrado com sucesso');
      setForm({ ...initialForm });
      setErrors([]);
    }
  }
  function actionForEdit(res: any) {
    if (res) {
      setErrors(res);
    } else {
      alert('Cliente atualizado com sucesso');
      setErrors([]);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      {errors && errors.map(e => (<p style={{ color: 'red' }}>{e}</p>))}

      <Grid cols={`200px 100px`} jc="space-between" auto={false}>
        <h3>Cadastrar</h3>
        <NavLink to={"/admin/clientes"}>Voltar</NavLink>
      </Grid>

      <Grid columns={2} size="auto" auto={true}>
        <FormInput
          name="name"
          label="Nome"
          value={form.name}
          onChange={(e) => handleValue(e)}
        />
        <FormInput
          name="email"
          label="E-mail"
          type="email"
          value={form.email}
          onChange={(e) => handleValue(e)}
        />
      </Grid>

      <Grid columns={3} size="auto" auto={true}>
        <FormInput
          name="cep"
          label="Cep"
          value={form.cep}
          onChange={(e) => handleValue(e)}
        />
        <FormInput
          name="end"
          label="Endereço"
          value={form.end}
          onChange={(e) => handleValue(e)}

        />
        <FormInput
          name="city"
          label="Cidade"
          value={form.city}
          onChange={(e) => handleValue(e)}
        />

        <FormInput
          name="phone"
          label="Telefone"
          value={form.phone}
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

export default ClientForm
