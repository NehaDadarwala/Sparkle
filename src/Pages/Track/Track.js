import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton';


const BillDetails = () => {
    // const [rows, setRows] = useState([]);

    const navigate = useNavigate();

    const onModify = (row) => {
    
            navigate('/modifyRepair', { state: row });
        
    };
    
    const columns = [
        {
            field: 'InvoiceID',
            headerName: 'Invoice ID',
            width: '150',
            headerAlign: "left",
        },
        {
            field: 'customerName',
            headerName: 'Customer Name',
            width: '190',
            headerAlign: "left",
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            width: '190',
            headerAlign: "left",
        },
        {
            field: 'Status',
            headerName: 'Status',
            type: 'string',
            width: '150',
            align: 'left',
            headerAlign: "left",
        },
        {
            field: 'Amount',
            headerName: 'Amount',
            width: '150',
            headerAlign: "left",
        },
        
        {
            field: 'Date',
            headerName: 'Date',
            type: 'Date',
            width: '150',
            align: 'left',
            headerAlign: "left",
        },
        {
            field: 'actions', headerName: 'Actions', width: 150, align: 'center', headerAlign: "center",renderCell: (params) => {
                return (
                    <CustomButton label="Modify" type="submit" onclickFunction={() =>  onModify(params.row)}></CustomButton>
                );
            }
        },
    ];
    
    const rows = [
        { id: '01',InvoiceID: 'R10010', customerName:'Jane Doe', phoneNumber: '1234556677', Status: 'new', Amount: 60.77, Date:'2023-02-08'},
        { id: '02',InvoiceID: 'R12300',  customerName:'David Warren',phoneNumber: '1234556677', Status: 'new', Amount: 140, Date:'2023-02-16'},
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