import 'server-only';

import { RecordDTO } from '@/lib/data.interface';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';

export default function Query({ query }: { query: string }) {
  let queryResults: RecordDTO[] = [];

  console.log('new query value', query);
  // TODO: refresh data from query.
  // queryResults.current = searchData(query);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom de tournage </TableCell>
              <TableCell align="right">Année</TableCell>
              <TableCell align="right">Lieu</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queryResults.map(row => (
              <TableRow
                key={row.fields.id_lieu}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fields.nom_tournage}
                </TableCell>
                <TableCell align="right">{row.fields.annee_tournage}</TableCell>
                <TableCell align="right">{row.fields.ardt_lieu}</TableCell>
                <TableCell align="right">{row.fields.type_tournage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
