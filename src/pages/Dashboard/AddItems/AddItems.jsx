import { useForm } from "react-hook-form";
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to Menu`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
      console.log(menuRes);
    }
  };
  return (
    <div>
      <Sectiontitle
        subheading={"add an item"}
        heading={"whats new"}
      ></Sectiontitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Recipe name</legend>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-full"
              placeholder="Recipe name"
            />
          </fieldset>
          <div className="flex gap-2">
            {/*categoy*/}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="Select a Category"
                className="select w-full"
              >
                <option disabled={true}>Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </fieldset>
            {/*price */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Price*</legend>
              <input
                {...register("price")}
                type="number"
                className="input w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>
          {/*recipe details */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea h-24 w-full"
              placeholder="Recipe Details"
            ></textarea>
          </fieldset>
          <div className="my-2">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input"
            />
          </div>
          <button className="btn">
            Add item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
