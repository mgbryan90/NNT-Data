export const columns = [
  {
    name: "Nombre",
    selector: (row) => row.name.first,
    sortable: true,
    center: true,
    style: {
      backgroundColor: "#C2F0D8",
      color: "black",
    },
  },
  {
    name: "Apellido",
    selector: (row) => row.name.last,
    sortable: true,
    center: true,
  },
  {
    name: "Edad",
    selector: (row) => row.dob.age,
    sortable: true,
    center: true,
    style: {
      backgroundColor: "#C2F0D8",
      color: "black",
    },
  },
  {
    name: "Genero",
    selector: (row) => row.gender,
    sortable: true,
    center: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    center: true,
    grow: 2,
    style: {
      backgroundColor: "#C2F0D8",
      color: "black",
    },
  },
  {
    name: "Nationality",
    selector: (row) => row.nat,
    sortable: true,
    center: true,
  },
  {
    name: "Photo",
    cell: (row) => (
      <img
        height="60px"
        width="60px"
        style={{ borderRadius: "50%" }}
        src={row.picture.thumbnail}
        alt=""
      />
    ),
    center: true,
    style: {
      backgroundColor: "#C2F0D8",
    },
  },
];

// Las cabeceras que se usan al momento de exportar a CSV
export const headers = [
  {
    label: "Nombre",
    key: "name.first",
  },
  {
    label: "Apellido",
    key: "name.last",
  },
  {
    label: "Edad",
    key: "dob.age",
  },
  {
    label: "Genero",
    key: "gender",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Nationality",
    key: "nat",
  },
  {
    label: "Photo",
    key: "picture.thumbnail",
  },
];

// Para customizar las celdas y darle mejor forma visual a una tabla
export const customStyles = {
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      backgroundColor: "#1F8A53",
      color: "white",
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
      },
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
      },
    },
  },
};

// Para poner las opciones de paginación en español
export const paginacionOpciones = {
  rowsPerPageText: "Filas por Página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
