import react, { useEffect, useState } from "react";
import { UserData, UserDetailsHeader } from "../StaticConstant.js";
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
    axios
      .get("http://localhost:4000/fetchuser")
      .then((res) => {
        let orderedData = res?.data?.toReversed();
        setUserList(orderedData);
      })
      .catch((error) => {
        debugger;
        if (error.code == "ERR_NETWORK") {
          alert("request to run server in /userdetailsserver");
        }
      });
  }, [updateUser]);

  let generateHeader = () => {
    let headerList = [];
    for (const headerValue in userList[0]) {
      headerList.push(
        <TableCell key={headerValue} align="centre">
          {headerValue}
        </TableCell>
      );
    }
    return headerList;
  };

  return userList.length > 0 ? (
    <TableContainer
      component={Paper}
      sx={{
        mt: 20,
        minWidth: 300,
        minHeight: "60vh",
        maxHeight: "60vh",
      }}
    >
      <Table
        stickyHeader
        sx={{ minWidth: 300, overflow: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {UserDetailsHeader.map((headerValue) => {
              return (
                <TableCell
                  key={headerValue}
                  align="centre"
                  sx={{ backgroundColor: "lightgray", fontWeight: "600" }}
                >
                  {headerValue}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.toReversed().map((User) => (
            <TableRow
              key={User.firstName}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
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
      sx={{ mt: 20, p: 3, minWidth: 300, minHeight: "55vh" }}
    >
      <h2>No User Found</h2>
    </TableContainer>
  );
};

export default UserDetails;
