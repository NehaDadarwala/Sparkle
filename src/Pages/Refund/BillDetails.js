import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';
import Navbar from '../../Components/Navbar';

const columns = [
  {
    field: 'Product',
    headerName: 'Product',
    width: '570',
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 300,
    align: 'left',
    headerAlign: "left",
  },
];

const rows = [
  { id: 1, Product: '10KT White Gold 10 INCH Chain', Price: 60.77 },
  { id: 2, Product: '10KT white Yellow Gold Hoops', Price: 30.00 },
];

const BillDetails = () => {
  const location = useLocation();
  const billnumber = location.state;


  const [selectedRows, setSelectedRows] = useState([]);

  const navigate = useNavigate();
  const getRefundProducts = () => {
    navigate('/refundBillDetails', { state: selectedRows });
  };
  

  return (
    <div>
      <Navbar/>
    <div style={{ height: 400, width: '60%', margin: 'auto', marginTop: '3%' }}>
      <TextField
        variant="standard"
        value={"Bill Number: " + billnumber}
        disabled
        type="text"
        sx={{ margin: '3%' }}
        InputProps={{
          disableUnderline: true,
        }}
      />
        <DataGrid
          rows={rows} // from the database call
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: '#5c6869',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = rows.filter((row) =>
              selectedIDs.has(row.id),
            );
            setSelectedRows(selectedRows);
          }}
        />
       <CustomButton label="Proceed" type="submit" onclickFunction={getRefundProducts}></CustomButton>
    </div>
    </div>
  )
}

export default BillDetails