# Project Proposal

Sparkle is an effective tool for managing and organizing the inventory, sales, and operations of a jewelry business. 

* *Date Created*: 28 FEB 2023
* *Last Modification Date*: 28 FEB 2023
* *Git URL*: <https://git.cs.dal.ca/hchhabra/csci5709-group8.git>
* *Deployment URL*: <https://sparkle-dazzel-you.netlify.app/>


## Authors

* [Neha Dadarwala](neha.dadarwala@dal.ca) - *(Full Stack Developer)*
* [Vrutika Kakadiya](vrutika.kakadiya@dal.ca) - *(Designer and Integrator)*
* [Hargun.Chhabra](Hargun.Chhabra@dal.ca) - *(Full stack developer)*
* [Sakshi Chaitanya Vaidya](sakshi.vaidya@dal.ca) - *(Full Stack Developer)*
* [Dev Pratap SIngh Rajawat](dv269119@dal.ca) - *(Full Stacl Developer)*


## Getting Started
## Deployment

To login into the system, you may use the following credentials

username: group8@dal.ca
password: Test@123
Role: Admin

username: Hargun.Chhabra@dal.ca
password: Test@123
Role: sales associate
## Built With

* [React](https://reactjs.org/) - Front-end JavaScript Library
* [React Bootstrap](https://www.npmjs.com/package/react-bootstrap) - Front-end Library
* [Material UI](https://mui.com/) - React Component Library
* [Netlify](https://www.netlify.com/) - Cloud Application Platform
* [Axios](https://www.npmjs.com/package/axios) - Promised-based HTTP client for JavaScript
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Promised-based HTTP client for JavaScript

**

## Sources Used

### src\Pages\Refund\BillDetails.js

*Lines 68 - 93*

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

*Lines 122 - 145*

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


### /src/Pages/Repair/RepairForm.js

*Lines 25 - 33*

```
Swal.fire({
      title: 'Repair Added Successfully ',
      position: 'top-end',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(function () {
      window.location.href = "/create";
  })

```

The code above was created by adapting the code in [sweetalert2](https://sweetalert2.github.io/) as shown below: 

```
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})

```

- The code in [sweetalert2](https://sweetalert2.github.io/) was implemented by using sweetalert
- [sweetalert2](https://sweetalert2.github.io/)'s Code was used because I wanted to show pop up message on successful submission of form
- [sweetalert2](https://sweetalert2.github.io/)'s Code was modified by changing title and adding route after message is shown

### src\Pages\usermanagement\Register.js

*lines 152 - 179*

*mycode:*
``` 
    <div className="containerind">
        

                    <form onSubmit={reg}>
                        <div>
                            
                            <div><input type="text" placeholder="First Name" id="name" onChange={(event)=>setFirstName(event.target.value) } style={{ borderColor: FirstNameval ? 'green' : 'red' }}   required></input></div>
                            {FirstNameError && <div style={{ color: 'red' }}>{FirstNameError}</div>}
                            <div><input type="text" placeholder="Last Name" id="phnnumber" onChange={(event)=>setLastName(event.target.value)} style={{ borderColor: LastNameval ? 'green' : 'red' }}  required></input></div>
                            {LastNameError && <div style={{ color: 'red' }}>{LastNameError}</div>}
                            <div><input type="text" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} style={{ borderColor: emailval ? 'green' : 'red' }}  required></input></div>
                            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                            <div><input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} style={{ borderColor: passwordval ? 'green' : 'red' }} required></input></div>
                            { passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                            <div><input type="password" placeholder="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)} style={{ borderColor: confpasswordval ? 'green' : 'red' }} required></input></div>
                            {confpasswordError && <div style={{ color: 'red' }}>{confpasswordError}</div>}

                            
                            {/* <div className="containerind2" ><button type="submit" >Register</button></div> */}
                            <div className="containerind2"><CustomButton label="Register" onclickFunction={reg}></CustomButton></div>

   
      
                        </div>
                        {FormError && <div style={{ color: 'red' }}>{FormError}</div>}
                    </form>
                    </div>
                      
```

*reference code:*
``` 
    <html>
            <head></head>
   
                <div>
                    <form onSubmit={reg}>
                        <div>
                            <div><input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)} required></input></div>
                            <div><input type="text" placeholder="Phone Number" onChange={(event)=>setPhone(event.target.value)} required></input></div>
                            <div><input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} required></input></div>
                            <div><input type="email" placeholder="Confirm Email" onChange={(event)=>setConfirmEmail(event.target.value)} required></input></div>
                            <div><input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} required></input></div>
                            <div><input type="password" placeholder="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)} required></input></div>
                            <div>    
                                <select name="cars" id="cars" onChange={(event)=> setChoice(!bool)}>
                                    <option value="sales associate">Sales Associate</option>
                                    <option value="manager">Store Manager</option>
                                </select>
                            </div>
      
                            <div ><button type="submit" >Register</button><button onClick={change} >Login</button></div>

   
      
                        </div>
        
                    </form>
                </div></html>
``` 

```

The code was created by adapting the code in my assignment1(https://git.cs.dal.ca/hchhabra/csci5709/-/blob/assignment1)  

```

### Image

```
The ring image for the application is used from [FAVPNG](https://favpng.com/png_view/wedding-ring-engagement-ring-wedding-ring-diamond-cut-png/HkKEwRUM)
```
### Components/StockCardView.js

*Lines 32 - 52*

```
 <Card sx={{ maxWidth: 345, margin: 5 }}>
                    <CardMedia
                        image={ring}
                        sx={{ height: 300 }}
                        title="Ring"
                    />
                    <CardContent align='left'>
                        <Typography   name ="productName">
                        {stock.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" name="qty" >
                            Qty : {stock.qty}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" name="price">
                            Price : {"$" + stock.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(path,{replace:true , state:stock}) +console.log(stock) }>Modify</Button>
                    </CardActions>
                </Card>
```

The code above was created by adapting the code in [Siriwat K's Github repo](https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/components/cards/ActionAreaCard.tsx) as shown below: 

```
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
```

- The code in [Siriwat K's Github repo](https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/components/cards/ActionAreaCard.tsx) was implemented by using MUI components.
- [Siriwat K's Github repo](https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/components/cards/ActionAreaCard.tsx)'s Code was used to implement a current stock card view. 
- [Siriwat K's Github repo](hhttps://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/components/cards/ActionAreaCard.tsx)'s Code was modified to add styling and proper box format.

### Pages/Inventory/ModifyStock.js

*Lines 88 - 96*

```
  <Autocomplete
                        disablePortal
                        id="productRefNumber"
                        value={formValues.productRefNumber}
                        options={productRefNumber}
                        fullWidth
                        ListboxProps={{ style: { maxHeight: 150 } }}
                        renderInput={(params) => <TextField {...params} label="Product Reference Number" size='small' />}
                    />
```

The code above was created by adapting the code in [MUI Core](https://mui.com/material-ui/react-autocomplete/) as shown below: 

```
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
```

- The code in [MUI Core](https://mui.com/material-ui/react-autocomplete/) was implemented by using MUI components.
- [MUI Core](https://mui.com/material-ui/react-autocomplete/)'s Code was used to implement a search box in modify stock. 
- [MUI Core](https://mui.com/material-ui/react-autocomplete/)'s Code was modified by changing data to the search box and according to form style.

### Pages/Inventory/ModifyStock.js

*Lines 62 - 72*

```
  const getRefundProducts = () => {
        Swal.fire({
            title: "Product Added Successfully",
            icon: 'success',
            text: "Redirecting in a second...",
            timer: 1500,
            showConfirmButton: false
        }).then(function () {
            navigate("/viewStock")
        })
    };

```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/37358423/how-to-redirect-page-after-click-on-ok-button-on-sweet-alert) as shown below: 

```
swal({
  title: "Success!",
  text: "Redirecting in 2 seconds.",
  type: "success",
  timer: 2000,
  showConfirmButton: false
}, function(){
      window.location.href = "//stackoverflow.com/a/37358578/797495";
});
```

- The code in [Stackoverflow](https://stackoverflow.com/questions/37358423/how-to-redirect-page-after-click-on-ok-button-on-sweet-alert) was implemented by using sweetalert2.
- [Stackoverflow](https://stackoverflow.com/questions/37358423/how-to-redirect-page-after-click-on-ok-button-on-sweet-alert)'s Code was used to implement an alert. 
- [Stackoverflow](https://stackoverflow.com/questions/37358423/how-to-redirect-page-after-click-on-ok-button-on-sweet-alert)'s Code was modified by changing data according to the need for an instance the timer.

### src\Pages\Refund\employeprofile.js

*Lines 26 - 43, 53 - 71 and 95-106*

```
try {
          const response = await fetch("https://sparkle-api.onrender.com/user/getuserdetail", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem('email') })
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUser(data);
          localStorage.setItem('updateemail',localStorage.getItem('email'))
         
        } catch (error) {
          
          setError("some problem while deleting")
        }
    

```
```
try {
        const response = await fetch("https://sparkle-api.onrender.com/user/delete", {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({authtoken: localStorage.getItem('authtoken'), email: user.email })
        });
        if (!response.ok) {
      
          throw new Error('Network response was not ok');
        }
        const data =  response.json();
        
        navigate("/Profile")
        
      } catch (error) {
        
        setError(true)
        setErrormessage('some problem with deleting user or you dont have the necessary permission try again or call support')
      }

```

```
 <Card>
          <Card.Body>
          <Card.Title>{user.name}</Card.Title> 
            <Card.Subtitle>{user.email}</Card.Subtitle>
            <Card.Text>{user.phone}</Card.Text>
            <Card.Text>{user.role}</Card.Text>
            <Button variant="primary" onClick={remove}>Delete</Button>
            <Button variant="primary" onClick={updatepage}>Update</Button>
            {error && <div style={{ color: 'red' }}>{errormessage}</div>}
            {error && <button style={{ color: 'red' }} onClick={removeerror}>ok</button>}
          </Card.Body>
        </Card>

```


The code above was created by adapting the code in [Fetch Api documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and code in [Bootstrap cards documentation](https://react-bootstrap.github.io/components/cards/) as shown below: 

```
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

```
```
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

```

### src\Pages\Refund\Listemployee.js

*Lines 20 - 41 and 97 - 101*

```
const fetchEmpList = async () => {
      try {
        const response = await fetch("https://sparkle-api.onrender.com/user/getalluser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ authtoken: localStorage.getItem('authtoken') })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        const data = await response.json();
        setPeople(data);
        setpeopleCopy(data);
      } catch (error) {
        
        setError(true)
        setErrormessage("you dont seem to have necessary permisiion")
        
      }
    

```


```
 <ul style={stylesul}>
          {people.map(person => (
            <li key={person.email} onClick={() => clickable(person.email)} style={stylesli}>{person.name}</li>
          ))}
        </ul>

```


The code above was created by adapting the code in [Fetch Api documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and code in [How can I map through an object in ReactJS?](https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs) as shown below: 

```
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

```
```
{Object.keys(subjects).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
    </li>
))}

```


### src\Pages\Refund\Login.js

*Lines 32 - 40*

```
const fetchEmpList = async () => {
      try {
        const response = await fetch("https://sparkle-api.onrender.com/user/getalluser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ authtoken: localStorage.getItem('authtoken') })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        const data = await response.json();
        setPeople(data);
        setpeopleCopy(data);
      } catch (error) {
        
        setError(true)
        setErrormessage("you dont seem to have necessary permisiion")
        
      }
    

```


```
 <ul style={stylesul}>
          {people.map(person => (
            <li key={person.email} onClick={() => clickable(person.email)} style={stylesli}>{person.name}</li>
          ))}
        </ul>

```


The code above was created by adapting the code in [Fetch Api documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and code in [How can I map through an object in ReactJS?](https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs) as shown below: 

```
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

```
```
{Object.keys(subjects).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
    </li>
))}

```