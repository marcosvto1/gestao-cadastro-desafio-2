import { NavLink } from "react-router-dom";
import Grid from "../../components/Grid";
import ProductList from "../../components/Product/List";
import Template from "../../components/Template";

export default function AdminProductListPage() {
  return (
    <Template>
      <Grid cols={`200px 100px`} jc="space-between" auto={false} ai={'center'} > 
        <h3>Relação de Produtos</h3>
        <NavLink to={'/admin/produtos/novo'}>Novo Produto</NavLink>
      </Grid>

      <div>
        <ProductList />
      </div>

    </Template>
  );
}
