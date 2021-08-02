import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
        margin:'auto',
        flexDirection: 'column',
  },
});

function InputDetails(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Card>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="#"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {props.data.country}
          </Typography>
          <hr/>
          <Typography variant="body2" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
      </Card>
      <CardActions style={{backgroundColor: "#f0f0f0"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default InputDetails
