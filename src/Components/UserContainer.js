import UserEntry from "./UserEntry";
import UserDetails from "./UserDetail";
import Grid from "@mui/system/Unstable_Grid";

const UserContainer = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <UserEntry />
      </Grid>
      <Grid item xs={6}>
        <UserDetails />
      </Grid>
    </Grid>
  );
};
export default UserContainer;
