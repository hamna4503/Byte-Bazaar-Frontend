import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";
import UserTable from "./UserTable";

export default function UserManagement() {
  return (
    <>
      <Sidebar />
      <StatsCard />
      <UserTable />
    </>
  );
}
