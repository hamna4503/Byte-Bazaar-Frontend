import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";
import OrderTable from "./OrderTable";

export default function OrderManagement(){
    return(
        <>
        <Sidebar/>
        <StatsCard/>
        <OrderTable/>
        </>
    );
};