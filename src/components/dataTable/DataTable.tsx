

import { Link } from "react-router-dom"
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { deleteProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


type Props = {
  columns: GridColDef[],
  rows: object[],
  slug: string,
  getRowId?: (row: any) => any; // Make 'getRowId' prop optional
}

const DataTable = (props:Props) => {
  const dispatch = useDispatch()

  const handleDelete = (id:number)=>{
    deleteProduct(id, dispatch)
  }



  const actionColumn:GridColDef = {
    field:"action",
    headerName:"Action",
    width:100,
    renderCell:(params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row._id}`}>
          <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }


  return (
    <div className="dataTable">
      <DataGrid
      className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        getRowId={props.getRowId} // Pass the 'getRowId' prop here
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: {debounceMs: 500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />

    </div>
  )
}

export default DataTable
