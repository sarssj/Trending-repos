import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    background: "white",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 100,
    height: 100,
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    maxHeight: "80%",
    borderRadius: 7,
  },
}));

export default function StarredReposCard(props) {
  let now = new Date();
  const date_created = Math.ceil(
    (now - new Date(props.created_at)) / (1000 * 3600 * 24)
  );

  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="avatar" src={props.avatar} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid className="card-design" container justify="center">
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ fontStyle: "italic", fontWeight: "50" }}
                  >
                    <h5>{props.name}</h5>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    {props.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Grid container item xs={8} spacing={12}>
                      <div
                        className="group sis stars"
                        style={{ color: "black" }}
                      >
                        stars: {props.stars}
                      </div>
                      {"\u00A0"}
                      {"\u00A0"}
                      {"\u00A0"}
                      <div
                        className="group sis issues"
                        style={{ color: "black" }}
                      >
                        issues: {props.issues}
                      </div>
                      {"\u00A0"}
                      {"\u00A0"}
                      {"\u00A0"}
                      <div className="group sis" style={{ color: "blue" }}>
                        Submitted {date_created}{" "}
                        {date_created == 1 ? "day" : "days"} ago by{" "}
                        {props.owner_name}
                      </div>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
