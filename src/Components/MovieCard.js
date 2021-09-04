import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie backdrop"
          height="500"
          image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          title={props.movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="movie-card-action-container">
        <Button size="small" color="primary">
          Star
        </Button>
        <Button size="small" color="primary">
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
