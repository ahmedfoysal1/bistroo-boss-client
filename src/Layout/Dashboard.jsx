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

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-44  min-h-screen bg-orange-400">
        <ul className="menu p-4 ">
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
