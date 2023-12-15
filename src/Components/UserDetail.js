import react from "react";
import { UserData } from "../StaticConstant.js";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const UserDetails = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 20, p: 3, minWidth: 300 }}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="centre">FirstName</TableCell>
            <TableCell align="centre">LastName</TableCell>
            <TableCell align="centre">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((UserData) => (
            <TableRow
              key={UserData.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{UserData.FirstName}</TableCell>
              <TableCell align="left">{UserData.LastName}</TableCell>
              <TableCell align="left">{UserData.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDetails;
