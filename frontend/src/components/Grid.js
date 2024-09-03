import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 10px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
 
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
 
`;

const Grid = ({ products, setProducts, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
    
    if (confirmDelete) {
      await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
          const newArray = products.filter((user) => user.id !== id);
          setProducts(newArray);
          toast.success("Produto deletado com sucesso!");
        })
        .catch(({ data }) => toast.error("Erro ao deletar o produto: " + data));

      setOnEdit(null);
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Descrição</Th>
          <Th>Preço</Th>
          <Th>Código</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.nome}</Td>
            <Td width="25%">{item.descricao}</Td>
            <Td width="15%"> {item.preco}</Td>
            <Td width="15%">{item.codigo}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} style={{ cursor: 'pointer' }} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;