import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
      <Sectiontitle
        subheading={"Check it out"}
        heading={"Featured Item"}
      ></Sectiontitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolore voluptate ab neque repudiandae ut doloremque cum maiores a
            deleniti, nisi est laborum ipsum soluta quos unde quae sapiente eum
            magni amet placeat inventore enim. Modi inventore tenetur quasi
            magni fuga facilis doloremque ipsa esse minima maxime, iste cumque
            optio?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
