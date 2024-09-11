// React
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// Styles
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
// Components
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { Container } from "./components/Container";
import { Title } from "./components/Title";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Gerenciador de Usuários </Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast?.POSITION?.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
