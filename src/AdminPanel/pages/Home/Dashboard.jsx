import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";
import ProductsTable from "../InventoryManagement/ProductsTable";

export default function AdminHome(){
    return (
      <>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
          {/* <Sidebar /> */}
          <StatsCard />
          <Form/>

          <ProductsTable/>

        </div>
      </>
    );
};