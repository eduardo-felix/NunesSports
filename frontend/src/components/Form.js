import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getProducts, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const produto = ref.current;

      produto.nome.value = onEdit.nome;
      produto.descricao.value = onEdit.descricao;
      produto.preco.value = onEdit.preco;
      produto.codigo.value = onEdit.codigo;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = ref.current;

    if (
      !produto.nome.value ||
      !produto.descricao.value ||
      !produto.preco.value ||
      !produto.codigo.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: produto.nome.value,
          descricao: produto.descricao.value,
          preco: produto.preco.value,
          codigo: produto.codigo.value,
        })
        .then(({ data }) => toast.success("Produto editado com sucesso!"))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/produtos", {
          nome: produto.nome.value,
          descricao: produto.descricao.value,
          preco: produto.preco.value,
          codigo: produto.codigo.value,
        })
        .then(({ data }) => toast.success("Produto adicionado com sucesso!"))
        .catch(({ data }) => toast.error(data));
    }

    produto.nome.value = "";
    produto.descricao.value = "";
    produto.preco.value = "";
    produto.codigo.value = "";

    setOnEdit(null);
    getProducts();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Descrição</Label>
        <Input name="descricao" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="preco" />
      </InputArea>
      <InputArea>
        <Label>Código</Label>
        <Input name="codigo" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;