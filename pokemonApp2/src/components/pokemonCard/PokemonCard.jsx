import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PokemonCard = ({ pokemon, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="pokemon">
              {pokemon.id}
            </Avatar>
          }
          title={pokemon.name}
          // subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={pokemon.sprites && pokemon.sprites.front_default}
          alt="pokemon Image"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default PokemonCard;

{
  /* <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="pokemon">
              {pokemon.id}
            </Avatar>
          }
          title={pokemon.name}
          // subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={pokemon.sprites.front_default}
          alt="pokemon Image"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card> */
}
