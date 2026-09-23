import { CardTable, ContainerRows, TableHeader } from "./ListTableStyles.ts";

interface DataTableProps {
  headers: string[];
  children: React.ReactNode;
}

const ListTable = ({ headers, children }: DataTableProps) => {
  return (
    <CardTable>
      <TableHeader $columns={headers.length}>
        {headers.map((header) => (
          <h4 key={header}>{header}</h4>
        ))}
      </TableHeader>
      <ContainerRows>{children}</ContainerRows>
    </CardTable>
  );
};

export default ListTable;
