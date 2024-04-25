import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import '../../index.css';

const PokemonCard = ({ pokemon, isLoading, infoPokemon }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => {
          return (
            <>
              <Card
                key={index}
                sx={{ maxWidth: 400 }}
                onClick={() => infoPokemon(item)}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="pokemon">
                      {item.id}
                    </Avatar>
                  }
                  title={item.name}
                  // subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="200"
                  width="200"
                  image={item.sprites && item.sprites.front_default} // Added check for item.sprites
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
        })
      )}
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
