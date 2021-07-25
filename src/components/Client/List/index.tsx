import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Client } from '../../../models/client'
import Button from '../../Button'
import Card from '../../Card'
import Grid from '../../Grid'

const ClientList = () => {

  const location = useHistory();

  const [clients, setClients] = useState<Client[]>()

  useEffect(() => {
    findClients();
  }, [])

  function findClients() {
    const data = new Client().find();
    setClients(data);
  }

  function to(id: any) {
    location.push('/admin/clientes/' + id + '/edit');
  }

  function onRemove(id: string) {
    const aux = window.confirm('Voce realmente deseja remover este registro?');
    if (aux) {
      const c = new Client();
      c.id = id;
      c.remove();
      findClients();
    } else {
      return;
    }
  }

  return (
    <>
      <Grid cols="1fr 1fr 1fr 1fr" jc="space-between" auto={false}>
        {clients && clients?.map((item, key) => (
          <Card key={key} bg="pink" w="auto" p={10}>
            { item.name }<br/>
            <i>{item.email}</i><br/><br/>
            <Grid columns={2} size="1fr" gg={10} auto={true}>
                <Button onClick={() => to(item.id)}>Editar</Button>
                <Button color="danger" onClick={() => onRemove(item.id)}>Remover</Button>
            </Grid> 
              
          </Card>
        ))}

        {clients?.length === 0 && <h4>Nenhum cliente cadastrado!</h4>}   
      </Grid>
    </>
  )
}

export default ClientList
