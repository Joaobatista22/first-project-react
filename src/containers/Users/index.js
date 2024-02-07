import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../assets/User Profile_Monochromatic 2.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }
    fetchUsers();
  }, []); // Dependências vazias indicam que este efeito só deve ser executado uma vez, sem dependências.


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
        <Button to="/">
         <img alt="arrow" src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
