import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  review: {
    display: "flex",
    alignItems: "left",
    padding: 20,
    width: 350,
    backgroundColor: "transparent",
  },
  avatar: {
    width: 65,
    height: 65,
    marginRight: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    display: "block",
    alignItems: "left",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  rating: {
    marginLeft: 0,
    height: 10,
  },
  description: {
    marginTop: 1,
    maxWidth: 270,
  },
}));

const Complain = ({ avatar, name, date, rating, description }) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
      style={{ backgroundColor: "transparent" }}
      className={classes.review}
    >
      <Avatar src={avatar} alt={name} className={classes.avatar} />
      <Box className={classes.content}>
        <div className={classes.header}>
          <Typography style={{ fontSize: "15px" }} variant="h6">
            {name}
          </Typography>
          <div>
            <Typography style={{ fontSize: "10px" }} variant="subtitle2">
              {date}
            </Typography>
            <Rating
              value={rating}
              precision={0.5}
              readOnly
              className={classes.rating}
            />
          </div>
        </div>
        <Typography
          style={{ fontSize: "12px" }}
          className={classes.description}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Complain;
