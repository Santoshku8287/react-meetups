import { useContext } from "react";
import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);
    let content;
    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoriteCtx.favorites}/>
    }
  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
