import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const salad = menu.filter((item) => item.category == "salad");
  const drinks = menu.filter((item) => item.category == "drinks");
  const pizza = menu.filter((item) => item.category == "pizza");
  const soup = menu.filter((item) => item.category == "soup");
  const offered = menu.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <h2>this is menu</h2>
      {/* <PopularMenu></PopularMenu> */}
      <Sectiontitle
        subheading={"Don't Miss"}
        heading={"Today's offer"}
      ></Sectiontitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza item */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salads items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
