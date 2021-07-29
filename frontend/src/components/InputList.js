// import InputVar from "./InputVar";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  }
}));

function FormInputs(props) {
  const classes = useStyles();
  return (
    <div>
      <h3>Place List</h3>
      <List className={classes.root}>
        {props.data.map((list) => (
          <Link key={list.id} className="list" to ={`/place/${list.id}`}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={list.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {list.country}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          </Link>
        ))}
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}

export default FormInputs;
