import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from "react";
import CustomButton from '../../Components/CustomButton';


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
        width: 350,
    },
];

const RefundBillDetails = () => {
    const location = useLocation();
    const selectedRows = location.state;

    const [rows, setRows] = useState([]);


    const calculateTotal = useCallback(async () => {

        let totalRefundAmount = 0;
        selectedRows.forEach((row) => {
            totalRefundAmount = totalRefundAmount + row.Price;
        });
        //calculate tax on refund amount
        setRows([...selectedRows, { id: 10110, Product: 'Total', Price: totalRefundAmount }]);
    }, [selectedRows]);

    useEffect(() => {
        setRows(selectedRows);
        calculateTotal();
    }, [calculateTotal, selectedRows]);


    return (
        <div style={{ height: 400, width: '60%', margin: 'auto', marginTop: '9%' }}>
            <DataGrid
                rows={rows} // from the database call
                columns={columns}
                isRowHoverEnabled={true}
                rowHoverBackground="#7f92a0"
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: '#5c6869',
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    },
                }}
            />
            <CustomButton label="Proceed To Payment"></CustomButton>
        </div>

    )
}

export default RefundBillDetails