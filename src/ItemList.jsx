import React from "react";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,} 
from  '@mui/x-data-grid';



function CustomToolbar(){
    return (

        <GridToolbarContainer>

        </GridToolbarContainer>        
        )
}


const rows = [
    { id: 1, col1: '1', col2: '鸡胸肉',col3:'1kg' },
    { id: 2, col1: '2', col2: '香菜',col3:"200g" },
    { id: 3, col1: '3', col2: '大葱',col3:'3根' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Order', width: 150 },
    { field: 'col2', headerName: 'Name', width: 150 },
    { field: 'col3', headerName: 'Quantity', width: 150 },
  ];
  


export default function ItemList(){
    return (
        <div style={{height:400, width:'100%'}}>
            <DataGrid
               rows={rows}
               columns={columns}
                // components = {{
                //     Toolbar:CustomToolbar,
                // }}
            />
        </div>
    )
}
