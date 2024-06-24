import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/components/AdminProductList";
import AdminOrders from "../features/admin/components/AdminOrders";

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </div>
  );
};

export default AdminOrdersPage;
