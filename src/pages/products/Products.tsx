import { useEffect, useState } from "react"
import Add from "../../components/add/Add"
import DataTable from "../../components/dataTable/DataTable"
import "./products.scss"
import { GridColDef } from "@mui/x-data-grid";

import { getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


const Products = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const getRowId = (row: any) => row._id; // Define a function to get row IDs

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {/* Pass the 'getRowId' prop to the DataTable */}
      <DataTable slug="products" columns={columns} rows={products} getRowId={getRowId} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
