import { Product } from "@/interfaces/admin"
import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect, useState } from "react";
import http from "@/utils/http";
import { apiRoutes } from "@/routes/api";

 
export default function DemoPage() {

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    http.get(apiRoutes.favoris).then((res) => {
      setData(res.data);
    }
    );
  }, []);

  return (
    <>
       <h1 className="text-3xl font-bold m-2">Favoris</h1>
       <DataTable columns={columns} data={data} />
    </>
    
  )
}
