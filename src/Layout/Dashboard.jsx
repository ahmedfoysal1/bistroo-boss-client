import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import "./dashboard.css";
import useCart from "../hooks/useCart";
import { FaUsers } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { MdOutlineRestaurant } from "react-icons/md";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-44  min-h-screen bg-orange-400">
        <ul className="menu p-4 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <MdOutlineRestaurant />
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <BsFillMenuButtonFill />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBookBookmark />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers /> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/home"}>
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymenthistory"}>
                  <GiWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdOutlineReviews />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <RiCalendarScheduleFill /> My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/home"}>
              <IoMenuSharp /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/home"}>
              <FaBagShopping />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/home"}>
              <AiFillMessage /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
