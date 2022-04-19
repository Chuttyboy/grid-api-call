import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const columnDefs= [
    { headerName: "Camera2", field: "cam1" },
    { headerName: "Camera1", field: "cam1",}, 
    {headerName: "date",field: "date",},
    {headerName: "Status",field: "status",},
   
    ]
 
const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("http://localhost:5000/posts").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Camera Details</h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            // rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
