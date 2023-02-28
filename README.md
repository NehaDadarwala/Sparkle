# Project Proposal

Sparkle is an effective tool for managing and organizing the inventory, sales, and operations of a jewelry business. 

* *Date Created*: 29 FEB 2023
* *Last Modification Date*: 29 FEB 2023
* *Git URL*: <https://git.cs.dal.ca/hchhabra/csci5709-group8.git>
* *Deployment URL*: <https://sparkle-dazzel-you.netlify.app/>


## Authors

* [Neha Dadarwala](neha.dadarwala@dal.ca) - *(Full Stack Developer)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*
* [Name](email@dal.ca) - *(Role)*


## Getting Started
## Deployment

To login into the system, you may use the following credentials

username: group8@dal.ca
password: Test@123

## Built With

* [React](https://reactjs.org/) - Front-end JavaScript Library
* [React Bootstrap](https://www.npmjs.com/package/react-bootstrap) - Front-end Library
* [Material UI](https://mui.com/) - React Component Library
* [Netlify](https://www.netlify.com/) - Cloud Application Platform

**

## Sources Used

### src\Pages\Refund\BillDetails.js

*Lines 68 - 93

```
<DataGrid
    GridLinesVisibility="None"
    rows={rows} // from the database call
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    sx={{
        "& .MuiDataGrid-columnHeaders": {
        borderRadius: '20px 20px 0px 0px',

        backgroundColor: '#bab79d',
        color: '#444454',
        fontSize: 20,
        fontWeight: 'bold',
        },
        borderRadius: '20px',
    }}
    onSelectionModelChange={(ids) => {
        const selectedIDs = new Set(ids);
        const selectedRows = rows.filter((row) =>
        selectedIDs.has(row.id),
        );
        setSelectedRows(selectedRows);
    }}
/>
```

The code above was created by adapting the code in [MUI Data Grid](https://mui.com/x/react-data-grid/) as shown below: 

```
<Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
    experimentalFeatures={{ newEditingApi: true }}
    />
</Box>
```

- The code in [MUI Data Grid](https://mui.com/x/react-data-grid/) was implemented by using MUI components.
- [MUI Data Grid](https://mui.com/x/react-data-grid/)'s Code was used to implement a data table with checkboxes. 
- [MUI Data Grid](https://mui.com/x/react-data-grid/)'s Code was modified to add styling using CSS and MUI property such as adding color for header and border styling.

### src\Pages\Refund\RefundBillDetails.js

*Lines 122 - 145

```
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
```

The code above was created by adapting the code in [MUI Data Grid](https://mui.com/x/react-data-grid/) as shown below: 

```
<Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
    experimentalFeatures={{ newEditingApi: true }}
    />
</Box>
```

- The code in [MUI Data Grid](https://mui.com/x/react-data-grid/) was implemented by using MUI components.
- [MUI Data Grid](https://mui.com/x/react-data-grid/)'s Code was used to implement a data table displaying the final bill details in efficient manner. 
- [MUI Data Grid](https://mui.com/x/react-data-grid/)'s Code was modified to add styling using CSS and MUI property such as disabling footer and checkboxes. Also I added styling for last row of the the table.


### src\Pages\Refund\RefundBillDetails.js

*Lines 59 - 115*

```
if (paymentMode === 'Credit Card' || paymentMode === 'Debit Card') {

    const { value: formValues } = await Swal.fire({
        title: 'Enter Card Details',
        html:
            '<input required id="swal-input1" placeholder="Card Holder Name" class="swal2-input">' +
            '<input required type="number" id="swal-input2" placeholder="Card Number"class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            if (document.getElementById('swal-input1').value != '' || document.getElementById('swal-input1').value != '') {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            } else {
                Swal.showValidationMessage('Input Fields Missing')
            }
        }
    })

    if (formValues) {
        navigate('/invoice', {
            replace: true,
            state: {
                payment: paymentMode,
                row: rows,
                cardDetails: formValues,
            }
        });
    }
} else {
    const { value: formValues } = await Swal.fire({
        title: 'Enter Customer Name',
        html:
            '<input required id="swal-input1" placeholder="Customer Name" class="swal1-input">',
        preConfirm: () => {
            if (document.getElementById('swal-input1').value != '') {
                return [
                    document.getElementById('swal-input1').value,
                    "XXX"
                ]
            } else {
                Swal.showValidationMessage('Input Field Missing')
            }
        }
    })
    if (formValues) {
        navigate('/invoice', {
            replace: true, 
            state: {
                payment: paymentMode,
                row: rows,
                cardDetails: formValues,
            }
        });
    }
}
```

The code above was created by adapting the code in [Sweetalert2](https://sweetalert2.github.io/) as shown below: 

```
const { value: formValues } = await Swal.fire({
  title: 'Multiple inputs',
  html:
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}
```

- The code in [Sweetalert2](https://sweetalert2.github.io/) was implemented by using the SweetAlert2.
- [Sweetalert2](https://sweetalert2.github.io/)'s Code was used to get input data as a pop box that is customisable.
- [Sweetalert2](https://sweetalert2.github.io/)'s Code was modified by adding validation in the preconfirm(), changing navigation on success, and change validation message
