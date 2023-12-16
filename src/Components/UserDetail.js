import react, { useEffect, useState } from "react";
import { UserData } from "../StaticConstant.js";
import axios from "axios";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const UserDetails = (props) => {
  const { updateUser } = props;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/fetchuser").then((res) => {
      //debugger;
      let orderedData = res?.data?.toReversed();
      setUserList(orderedData);

      console.log("response", res.data);
      console.log("Soretedresponse", orderedData);
    });
  }, [updateUser]);
  return userList.length > 0 ? (
    <TableContainer
      component={Paper}
      sx={{
        mt: 20,
        minWidth: 300,
        minHeight: "50vh",
        maxHeight: "50vh",
      }}
    >
      <Table
        stickyHeader
        sx={{ minWidth: 300, overflow: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="centre">FirstName</TableCell>
            <TableCell align="centre">LastName</TableCell>
            <TableCell align="centre">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.toReversed().map((User) => (
            <TableRow
              key={User.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{User.firstName}</TableCell>
              <TableCell align="left">{User.lastName}</TableCell>
              <TableCell align="left">{User.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <TableContainer
      component={Paper}
      sx={{ mt: 20, p: 3, minWidth: 300, minHeight: "45vh" }}
    >
      No User Found
    </TableContainer>
  );
};

export default UserDetails;
