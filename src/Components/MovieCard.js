import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();

  console.log(`props.movie`, props.movie);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie poster"
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
        <div className="movie-card-icon-container">
          <Icon size="small" style={{ color: "orange" }}>
            star
          </Icon>
          {props.movie.vote_average}
        </div>
        <div className="movie-card-icon-container-favorite">
          <Icon
            size="small"
            style={{ color: props.inFavorite ? "red" : "grey" }}
          >
            favorite
          </Icon>
        </div>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
