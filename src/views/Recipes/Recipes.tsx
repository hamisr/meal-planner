//The recipes page
import React from "react";
import { connect, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import TopNav from "../../Components/TopNav/TopNav";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { Container, Grid, Rail, Modal, Button, Card } from "semantic-ui-react";

import "./Recipes.css";

interface Props {}
interface State {}

const RecipeCards: React.FC = () => {
  const recipes = useSelector((state: any) => state.firestore.ordered.recipes);
  if (recipes === undefined) {
    return <div></div>;
  } else {
    return recipes.map((recipe: any) => (
      <RecipeCard
        name={recipe.name}
        imageSrc={recipe.imageSrc}
        description={recipe.description}
        ingredients={recipe.ingredients}
        author={recipe.author}
        steps={recipe.steps}
      />
    ));
  }
};

const Recipes: React.FC<Props> = () => {
  return (
    <div>
      <TopNav />
      <Card.Group centered stackable doubling style={{ marginTop: "10px" }}>
        <RecipeCards />
      </Card.Group>
    </div>
  );
};
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
