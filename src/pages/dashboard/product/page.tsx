import { Product } from "@/interfaces/admin"
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect, useState } from "react";
import http from "@/utils/http";
import { apiRoutes } from "@/routes/api";

 
export default function DemoPage() {

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    http.get(apiRoutes.product).then((res) => {
      setData(res.data);
    }
    );
  }, []);

  return (
       <DataTable columns={columns} data={data} />
    
  )
}
