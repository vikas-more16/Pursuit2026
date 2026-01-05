import {
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserFriends,
  FaImages,
  FaHandshake,
  FaUsers,
  FaPhone,
} from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarItem icon={<FaHome />} label="Home" />
      <SidebarItem icon={<FaInfoCircle />} label="About" />
      <SidebarItem icon={<FaUserFriends />} label="Speakers" />
      <SidebarItem icon={<FaImages />} label="Gallery" />
      <SidebarItem icon={<FaHandshake />} label="Sponsors" />
      <SidebarItem icon={<FaUsers />} label="Core Team" />
    </aside>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="sidebar-item">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
