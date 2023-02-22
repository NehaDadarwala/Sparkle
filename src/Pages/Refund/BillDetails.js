import { Button, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'Product',
    headerName: 'Product',
    width: '570'
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 300,
  },
];

const rows = [
  { id: 1, Product: '10KT White Gold 10 INCH Chain', Price: 60.77 },
  { id: 2, Product: '10KT white Yellow Gold Hoops', Price: 30.00 },
];


const BillDetails = () => {
  return (
    <div container style={{ height: 400, width: '60%', margin: 'auto', marginTop: '3%' }}>
      <TextField 
        variant="standard"
        value={"Bill Number: " + 123148956}
        disabled
        type="text"
        sx={{ margin: '3%'}}
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
      />
      <Button sx={{ margin: '3%', float: 'right', backgroundColor: '#384241', borderColor: 'green' }}
        variant="contained">Proceed To Payment</Button>
    </div>
  )
}

export default BillDetails