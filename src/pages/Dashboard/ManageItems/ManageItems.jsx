import { MdDeleteForever } from "react-icons/md";
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu,loading,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove item",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: `${item.name} Removed`,
              text: `${item.name} Has been Removed`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <Sectiontitle
        heading={"Manage Items"}
        subheading={"Hurry up"}
      ></Sectiontitle>
      <div>
        <div>
            total item : {menu.length}
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-ghost text-2xl">
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost text-2xl"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
