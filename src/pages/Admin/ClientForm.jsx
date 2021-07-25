import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import ClientForm from "../../components/Client/Form";
import Grid from "../../components/Grid";
import FormInput from "../../components/Input";
import Template from "../../components/Template";

export default function AdminClientFormPage() {
  return (
    <Template>
      <ClientForm />
    </Template>
  );
}
