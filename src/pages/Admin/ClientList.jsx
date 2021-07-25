import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import ClientList from "../../components/Client/List";
import Grid from "../../components/Grid";
import FormInput from "../../components/Input";
import Template from "../../components/Template";

export default function AdminClientListPage() {
  return (
    <Template>
      <Grid cols={`200px 100px`} jc="space-between" auto={false} ai={'center'} > 
        <h3>Relação de Clientes</h3>
        <NavLink to={'/admin/clientes/novo'}>Novo Cliente</NavLink>
      </Grid>

      <div>
        <ClientList />
      </div>

    </Template>
  );
}
