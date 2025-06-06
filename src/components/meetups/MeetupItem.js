import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/favorite-context";

function MeetupItem({ id, image, title, address, description }) {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        description,
        image,
        address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
