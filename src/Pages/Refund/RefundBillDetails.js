import { useNavigate, useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from "react";
import CustomButton from '../../Components/CustomButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

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
        width: 340,
        align: 'left',
        headerAlign: "left",
    },
];

const RefundBillDetails = () => {
    const location = useLocation();
    const selectedRows = location.state;

    const [rows, setRows] = useState([]);
    const [paymentMode, setPaymentMode] = useState('Credit Card');


    const calculateTotal = useCallback(async () => {

        let totalRefundAmount = 0;
        selectedRows.forEach((row) => {
            totalRefundAmount = totalRefundAmount + row.Price;
        });
        let tax = totalRefundAmount * 0.05;
        totalRefundAmount = totalRefundAmount + tax;
        setRows([...selectedRows, { id: 10220, Product: 'GST (5%) ', Price: tax }, { id: 10110, Product: 'Total', Price: totalRefundAmount } ]);
    }, [selectedRows]);

    useEffect(() => {
        setRows(selectedRows);
        calculateTotal();
    }, [calculateTotal, selectedRows]);



    const handleChange = (event) => {
        setPaymentMode(event.target.value);
    };

    const navigate = useNavigate();
    const generateInvoice = () => {
        navigate('/invoice', { state: {
            payment: paymentMode,
            row: rows,
          }
        });
    }


    return (
        <div style={{ height: 400, width: '60%', margin: 'auto', marginTop: '5%' }}>
            <h1 style={{ textAlign: 'center' }}>Bill Summary</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                isRowHoverEnabled={true}
                hideFooterPagination
                hideFooterSelectedRowCount
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                      borderRadius: '20px 20px 0px 0px',
                      
                      backgroundColor: '#bab79d',
                      color: '#444454',
                      fontSize: 20,
                      fontWeight: 'bold',
                    },
                    borderRadius: '20px',
                    "& .MuiDataGrid-row": {
                        "&:last-child": {
                            fontWeight: 'bold',
                            fontSize: 16,
                        }
                    },
                  }}
            />
            <div>
                <FormControl variant="filled" style={{ width: 300, marginTop: '3%' }}>
                    <InputLabel id="demo-simple-select-label"
                        style={{ color: '#bab79d', verticalAlign: 'middle', marginTop: 0}}>Payment Mode</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentMode}
                        label="Payment Mode"
                        disableUnderline
                        labelwidth={150}
                        onChange={handleChange}
                        style={{ backgroundColor: '#444454', borderRadius:20, height: 50, width: 150}}
                        required
                        inputProps={{
                            sx: {
                                color: '#bab79d',
                            },
                            MenuProps: {
                                MenuListProps: {
                                    sx: {
                                        backgroundColor: '#444454',
                                        color: '#bab79d',
                                        borderColor: '#b28faa',
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem value='Credit Card'>Credit Card</MenuItem>
                        <MenuItem value='Debit Card'>Debit Card</MenuItem>
                        <MenuItem value='Cash'>Cash</MenuItem>
                    </Select>
                </FormControl>
                <CustomButton label="Proceed" onclickFunction={generateInvoice}></CustomButton>
            </div>

        </div>
   

    )
}

export default RefundBillDetails