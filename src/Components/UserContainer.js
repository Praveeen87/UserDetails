import UserEntry from "./UserEntry";
import UserDetails from "./UserDetail";
import Grid from "@mui/system/Unstable_Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const UserContainer = () => {
  const [updatedList, setUpdatedList] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/fetchuser").then((res) => {
  //     setUpdatedList(res?.data);
  //     console.log("response", res);
  //   });
  // }, [updatedList]);

  const updateList = (data) => {
    setUpdatedList(data);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <UserEntry userAdded={updateList} />
      </Grid>
      <Grid item xs={6}>
        <UserDetails updateUser={updatedList} />
      </Grid>
    </Grid>
  );
};
export default UserContainer;
