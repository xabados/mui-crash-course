import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://images.unsplash.com/photo-1559344465-ac6ad8e59943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt=""
        />
      </Paper>
    </Grid>
  );
};

export default TourCard;
