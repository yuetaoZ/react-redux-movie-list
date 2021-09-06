import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { toggleFavoriteAsyncAction } from "../redux/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => {
    return state.movieModule;
  });

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(props.inFavorite);
  }, []);

  const classes = useStyles();

  const toggleFavorite = (id) => {
    toggleFavoriteAsync(favorite, id);
    setFavorite(!favorite);
  };

  const toggleFavoriteAsync = (isFavorite, movieId) => {
    const body = {
      media_type: "movie",
      media_id: movieId,
      favorite: !isFavorite,
    };
    dispatch(
      toggleFavoriteAsyncAction(userData.accountId, userData.sessionId, body)
    );
  };

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
        <div
          className="movie-card-icon-container-favorite"
          onClick={() => toggleFavorite(props.movie.id)}
        >
          <Icon size="small" style={{ color: favorite ? "red" : "grey" }}>
            favorite
          </Icon>
        </div>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
