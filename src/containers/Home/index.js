import React, { useState } from "react";
import axios from "axios";
import People from "../../assets/Consulting_Isometric 1.svg";
import Arrow from "../../assets/arrow.svg";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function addNewUser() {
    // Verifica se o nome e a idade estão preenchidos antes de adicionar o novo usuário
    if (name && age) {
      const newUser = { name, age };

      const response = await axios.post("http://localhost:3001/users", newUser);
      setUsers([...users, response.data]);
      // Limpa os campos após adicionar um novo usuário
      setName("");
      setAge("");
      // Redireciona apenas se os campos estiverem preenchidos
      window.location.href = "/usuarios";
    } else {
      // Mostra um alerta se o nome ou a idade estiverem faltando
      alert(
        "Por favor, preencha todos os campos antes de adicionar um novo usuário."
      );
    }
  }

  function changeInputName(event) {
    // Remove números do valor do campo de nome
    const newValue = event.target.value.replace(/[0-9]/g, "");
    setName(newValue);
  }

  function changeInputAge(event) {
    setAge(event.target.value);
  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input
          onChange={changeInputName}
          value={name}
          type="text"
          id="nomeInput"
          placeholder="Digite seu nome"
        />
        <InputLabel>Idade</InputLabel>
        <Input
          onChange={changeInputAge}
          value={age}
          type="number"
          placeholder="Digite a idade"
        />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
