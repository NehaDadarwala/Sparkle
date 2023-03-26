import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';


const BillDetails = () => {
    // const [rows, setRows] = useState([]);

    const navigate = useNavigate();

    const onModify = (row) => {
        if(row.Type === "Repair"){
            navigate('/modifyRepair', { state: row });
        }else{
            console.log("Special Order", row)
        }
    };
    
    const columns = [
        {
            field: 'InvoiceID',
            headerName: 'Invoice ID',
            width: '205',
            headerAlign: "left",
        },
        {
            field: 'Type',
            headerName: 'Type',
            width: '205',
            headerAlign: "left",
        },
        {
            field: 'customerName',
            headerName: 'Customer Name',
            width: '205',
            headerAlign: "left",
        },
        {
            field: 'Amount',
            headerName: 'Amount',
            type: 'number',
            width: '205',
            align: 'left',
            headerAlign: "left",
        },
        {
            field: 'Date',
            headerName: 'Date',
            type: 'Date',
            width: '190',
            align: 'left',
            headerAlign: "left",
        },
        {
            field: 'actions', headerName: 'Actions', width: 205, align: 'center', headerAlign: "center",renderCell: (params) => {
                return (
                    <CustomButton label="Modify" type="submit" onclickFunction={() =>  onModify(params.row)}></CustomButton>
                );
            }
        },
    ];
    
    const rows = [
        { id: '01',InvoiceID: 'R10010', Type: 'Repair', customerName:'Jane Doe', Amount: 60.77, Date:'2023-02-08'},
        { id: '02',InvoiceID: 'S010001', Type: 'Special Order', customerName:'David Warren', Amount: 140, Date:'2023-02-16'},
    ];
    

    return (

        <div style={{ height: 400, width: '80%', margin: 'auto', marginTop: '3%' }}>
            <DataGrid
                GridLinesVisibility="None"
                rows={rows} // from the database call
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        borderRadius: '20px 20px 0px 0px',

                        backgroundColor: '#bab79d',
                        color: '#444454',
                        fontSize: 17,
                        fontWeight: 'bold',
                    },
                    borderRadius: '20px',
                }}
            />
        </div>
    )
}

export default BillDetails