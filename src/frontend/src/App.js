// React
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { getAllUsers } from "./services/userService.js";

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
      const res = await getAllUsers();
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error.response?.data || "Error fetching users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>Gerenciador de Usuários </Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;
