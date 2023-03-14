import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import {
  columns,
  customStyles,
  headers,
  paginacionOpciones,
} from "../components/table";
import {
  ButtonExportar,
  Container,
  ContainerOptions,
  Title,
} from "../styles/styles";

export const TableUsers = () => {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://randomuser.me/api/";

  const showData = async () => {
    const response = await fetch(`${BASE_URL}/?results=15`);
    const data = await response.json();
    // console.log(data);
    setUsers(data.results);
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <Container>
      <Title> Lista de Usuarios "SHIELD" </Title>
      <ContainerOptions>
        <CSVLink
          data={users}
          headers={headers}
          separator={";"}
          filename={"users.csv"}
        >
          <ButtonExportar> Exportar CSV </ButtonExportar>
        </CSVLink>
      </ContainerOptions>
      <DataTable
        columns={columns}
        data={users}
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="1100px"
        customStyles={customStyles}
      />
    </Container>
  );
};
