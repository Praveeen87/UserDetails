import UserEntry from "./UserEntry";
import UserDetails from "./UserDetail";
import Grid from "@mui/system/Unstable_Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const UserContainer = () => {
  const [updatedList, setUpdatedList] = useState([]);

  const updateList = (data) => {
    setUpdatedList(data);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <UserEntry userAdded={updateList} />
      </Grid>
      <Grid item xs={8}>
        <UserDetails updateUser={updatedList} />
      </Grid>
    </Grid>
  );
};
export default UserContainer;
