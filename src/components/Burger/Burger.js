import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
