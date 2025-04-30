import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category == "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popularr = menu.filter((item) => item.category == "popular");

  return (
    <section className="mb-12">
      <Sectiontitle
        heading={"From Our menu"}
        subheading={"popular itmes"}
      ></Sectiontitle>
      <div className="grid md:grid-cols-2 gap-10 p-2">
        {popularr.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
