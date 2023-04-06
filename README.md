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

### src\Pages\usermanagement\employeprofile.js

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

### src\Pages\usermanagement\Listemployee.js

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


### src\Pages\usermanagement\Login.js

*Lines 32 - 40*

```
await axios.post(`https://sparkle-api.onrender.com/user/login`, { email:Email,password:password })
      .then(res => {
        localStorage.setItem('authtoken',res.data.token);
        navigate("/Profile");
      
      }).catch((error)=>{
        setError(true)
        setErrorMessage('Wrong credentials please try again or call admin or support')
      })
}

    

```


The code above was created by adapting the code in [React + Axios - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples) 

```
componentDidMount() {
    // Simple POST request with a JSON body using axios
    const article = { title: 'React POST Request Example' };
    axios.post('https://reqres.in/api/articles', article)
        .then(response => this.setState({ articleId: response.data.id }));
}

```


### src\Pages\usermanagement\Register.js


*mycode:*
``` 
   All the code in this file is adaptation of the code in /component/register.js taken from my [tutorial3](https://git.cs.dal.ca/hchhabra/csci5709/-/tree/tutorial3)  and adaptation of the code in [Fetch Api documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```

### src\Pages\usermanagement\Profile.js

*Lines 22 - 41 and 58-65*

```
const fetchEmpList = async () => {
       try {
          const response = await fetch("https://sparkle-api.onrender.com/user/getdetail", {
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
          setUser(data);
          localStorage.setItem('role',data.role);
          
        } catch (error) {
        
        }

```


```
 <Card>
          <Card.Body>
          <Card.Title>{user.name}</Card.Title> 
         
            <Card.Subtitle>Logged in as: {user.email}</Card.Subtitle>
          
          </Card.Body>
        </Card>

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

### src\Pages\usermanagement\updateEmp.js

*Lines 46 - 47*

```
   await axios.put('https://sparkle-api.onrender.com/user/updateuser',obj).then(response => {console.log(response);navigate("/Profile");});
  }catch(error){
    
  }

    

```

The code above was created by adapting the code in [React + Axios - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples) 

```
useEffect(() => {
    // PUT request using axios inside useEffect React hook
    const article = { title: 'React Hooks PUT Request Example' };
    axios.put('https://reqres.in/api/articles/1', article)
        .then(response => setUpdatedAt(response.data.updatedAt));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

```

### src\Pages\usermanagement\updateEmp.js

*Lines 15 - 84*

```
  <>
      <nav>
        <div className="heading">Sparkle</div>
        

        <div className="navbar">
          <ul>
            <li>
              <a href="https://sparkle-dazzel-you.netlify.app/Login">Log In</a>
            </li>
          </ul>
        </div>
      </nav>


      <div className="line" id="Home">
        <div className="side1">
          <h1>Sparkle: A store management system designed specially for Jewelry stores.</h1>
        </div>
        <div className="side2">
          <img
            src="https://cdn.shopify.com/s/files/1/2352/8933/files/DSC08480-IMOGEN-ROSE-JEWELLERY-CHLOE-UPTON-STUDIO-PHOTOGRAPHY_1_300x.jpg?v=1673556555"
            width="470"
          />
        </div>
      </div>

      <section className="about" id="My Projects">
        <div className="content">
          <div className="title">
            <span>Contact</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">
                <h2>Mailing Address</h2>
              </div>
              <p>XYZ ABC Street, Halifax, Nova Scotia</p>
            </div>
            <div className="box">
              <div className="topic">
                <h2>Email Address</h2>
              </div>
              <a href="mailto:group8@dal.ca" target="_blank">
                group8@dal.ca
              </a>
            </div>
            <div className="box">
              <div className="topic">
                <h2>Phone Number</h2>
              </div>
              <a href="tel:9999999999" target="_blank">
                9999999999
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <span>
            Created By
            <a href="" target="_blank">
              Group8
            </a>
          </span>
        </div>
      </footer>
    </>

```

The code above was created by adapting the code in [How to create a Landing page using HTML CSS and JavaScript ?](https://www.geeksforgeeks.org/how-to-create-a-landing-page-using-html-css-and-javascript/). landing page is one necessary partof the website so i reffered to the site in order to get a template as creating whole landing page from scratch will take a lot of time. shown below

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content=
		"width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="index.css">
	<title>Landing Page</title>
</head>

<body>
	<nav>
		<div class="heading">Landing Page</div>
		<span class="sideMenuButton"
			onclick="openNavbar()">
			☰
		</span>

		<div class="navbar">
			<ul>
				<li><a href="#Home">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Sign Up</a></li>
			</ul>
		</div>
	</nav>

	<!-- Side navigation bar for
		responsive website -->
	<div class="sideNavigationBar"
		id="sideNavigationBar">
		<a href="#" class="closeButton"
			onclick="closeNavbar()">
			
		</a>
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Sign Up</a>
	</div>

	<!-- Content -->
	<div class="line" id="Home">
		<div class="side1">
			<h1>GeeksforGeeks</h1>
			<button>
				<a href=
"https://www.geeksforgeeks.org/">
					Explore More
				</a>
			</button>
		</div>
		<div class="side2">
			<img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png"
				width="500">
		</div>
	</div>

	<section class="about" id="My Projects">
		<div class="content">
			<div class="title">
				<span>Courses</span>
			</div>
			<div class="boxes">
				<div class="box">
					<div class="topic">
						<a href="" target="_blank">
							DSA
						</a>
					</div>
					<p>
						The term DSA stands for Data
						Structures and Algorithms. As
						the name itself suggests, it
						is a combination of two
						separate yet interrelated
						topics.
					</p>
				</div>
				<div class="box">

					<div class="topic">
						<a href="" target="_blank">
							HTML
						</a>
					</div>
					<p>
						HTML stands for HyperText
						Markup Language. It is used
						to design web pages using
						the markup language.
					</p>
				</div>

				<div class="box">
					<div class="topic">
						<a href="" target="_blank">
							Javascript
						</a>
					</div>
					<p>
						JavaScript (JS) is the most
						popular lightweight, interpreted
						compiled programming language.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="contact" id="contact">
		<div class="content">
			<div class="title"><span>Sign Up</span></div>
			<div class="contactMenu">
				<div class="input1">
					<div class="label1">Your Name</div>
					<div class="input2">
						<input type="text"
							placeholder="Enter your Name here">
					</div>
					<div class="label1">
						<label>Your Email</label>
					</div>
					<div class="input2">
						<input type="text"
							placeholder="Enter your Email here">
					</div>
					<div class="label1">
						<label>Your Password</label>
					</div>
					<div class="input2">
						<input type="text"
							placeholder="Enter your Password here">
					</div>
					<div class="button">
						<button>Sign Up</button>
					</div>
				</div>
				<div class="input3">
					<div class="rightside1">
						<div class="title1">
							<span>
								Contact Us
							</span>
						</div>
						<div class="content1">
							A-143, 9th Floor, Sovereign
							Corporate Tower, Sector-136,
							Noida, Uttar Pradesh - 201305
						</div>
						<div class="title1">
							<span>More Information</span>
						</div>
						<div class="content1">
							Greetings to all the Geeks out there!
							We welcome you to the platform where we
							consistently strive to offer the best
							of education. This platform has been
							designed for every geek wishing to
							expand their knowledge, share their
							knowledge and is ready to grab their
							dream job. We have millions of articles,
							live as well as online courses, thousands
							of tutorials and much more just for the
							geek inside you.Thank you for choosing
							and supporting us!
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Footer section -->
	<footer>
		<div class="footer">
			<span>
				Created By
				<a href="https://www.geeksforgeeks.org/"
					target="_blank">
					GeeksforGeeks
				</a>
			</span>
		</div>
	</footer>
	<script src="index.js"></script>
</body>

</html>

```


### src\Landing.css

Lines 2 - 326*

```
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  
body {
    background-color: white;
    color: black;
    font-family: "Fira Sans", sans-serif;
    background-color: white;
}
  
nav {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px 5%;
    background-color: #b09c91;
}
  
nav .heading {
    font-size: 30px;
    font-weight: 700;
    color: white;
}
  
nav ul {
    display: flex;
    list-style: none;
}
  
nav ul li {
    padding: 8px 15px;
    border-radius: 10px;
    transition: 0.2s ease-in;
}
  
nav ul li a {
    color: black;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: white;
}
  
nav ul li:hover {
    background-color: #b09c91;
}
  
nav ul li a:hover {
    color: white;
}
  
nav .sideMenuButton {
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    display: none;
}
  
/* responsive navbar css */
@media screen and (max-width: 600px) {
    nav .sideMenuButton {
        display: flex;
    }
  
    nav .navbar {
        display: none;
    }
  
    .sideNavigationBar {
        display: block !important;
    }
}
  
.sideNavigationBar {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0%;
    background-color: green;
    overflow-x: hidden;
    transition: 0.3s ease-in;
    padding-top: 60px;
    display: none;
}
  
.sideNavigationBar a {
    padding: 8px 8px 8px 40px;
    display: block;
    font-size: 25px;
    font-weight: 500;
    color: #d1d1d1;
    transition: 0.3s;
    text-decoration: none;
}
  
.sideNavigationBar a button {
    padding: 10px 20px;
    border-radius: 10px;
    color: #b09c91;
    font-size: 16px;
    border-style: none;
    font-weight: 700;
}
  
.sideNavigationBar a:hover {
    color: white;
}
  
.sideNavigationBar .closeButton {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 20px;
    margin-left: 50px;
}
  
.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 5%;
}
  
.line .side1 {
    padding-right: 50px;
}
  
.side1 h1 {
    font-size: 60px;
    margin-bottom: 10px;
    color: #b09c91;
}
  
.side1 button {
    width: 200px;
    padding: 12px 20px;
    border-radius: 20px;
    border-style: none;
    color: black;
    font-size: 17px;
    font-weight: 600;
}
  
a {
    text-decoration: none;
    color: black;
}
  
/* Header content responsive */
@media screen and (max-width: 980px) {
    .side2 img {
        width: 350px;
    }
  
    .side1 h1 {
        font-size: 40px;
    }
  
    .side1 p {
        font-size: 17px;
    }
  
    .line {
        margin-top: 80px;
    }
}
  
@media screen and (max-width: 600px) {
    .side1 h1 {
        font-size: 35px;
    }
  
    .line {
        flex-direction: column;
    }
  
    .line .side1 {
        padding: 30px;
    }
}
  
/* section */
  
section .topic a {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
}
  
.about .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
  
.about .boxes .box {
    margin: 10px 20px;
    max-width: calc(100% / 3 - 50px);
    text-align: center;
    border-radius: 12px;
    padding: 20px 100px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    cursor: default;
    margin-bottom: 20px;
    gap: 0;
}
  
/* Contact Page  */
  
.contact {
    padding: 20px;
}
  
.contact .content {
    margin: 0 auto;
    padding: 30px 0;
}
  
.content .title {
    width: 80%;
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
}
  
.title {
    margin-bottom: 30px;
    margin-left: 140px;
}
  

  
.input2 {
    margin-top: 10;
}
  
.label1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: bolder;
}
  
 .input1 input {
    border-radius: 13px;
    padding: 6px;
}
  
.input2 input {
    border-color: rgb(252, 244, 244);
    width: 400px;
}
  

  
.rightside1 {
    display: flex;
    flex-direction: column;
    margin-left: 300px;
}
  
.title1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 5px;
    font-weight: bolder;
}
  
.content1 {
    width: 450px;
    margin-top: 2px;
    color: grey;
}
  
/* Footer */
footer {
    background: var(--primary-color);
    padding: 15px 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
}
  
footer .footer span {
    font-size: 17px;
    font-weight: 400;
    color: var(--white-color);
}
  
footer .footer span a {
    font-weight: 500;
    color: var(--white-color);
}
  
footer .footer span a:hover {
    text-decoration: underline;
}

  
@media screen and (max-width: 600px) {
    .side2 img {
        width: 100%;
    }
  
    section .topic a {
        font-size: 20px;
    }
  
    section .topic p {
        font-size: 5px;
    }
  
    .about .boxes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
    .about .boxes .box {
        max-width: 70%;
    }
}

    

```

The code above was created by adapting the code in [How to create a Landing page using HTML CSS and JavaScript ?](https://www.geeksforgeeks.org/how-to-create-a-landing-page-using-html-css-and-javascript/) again this is the css for the landing page html mentioned above the whole landing page will take lot of time to create from scratch shown below

```
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  
body {
    background-color: white;
    color: black;
    font-family: "Fira Sans", sans-serif;
    background-color: white;
}
  
nav {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px 5%;
    background-color: #8cc099;
}
  
nav .heading {
    font-size: 30px;
    font-weight: 700;
    color: white;
}
  
nav ul {
    display: flex;
    list-style: none;
}
  
nav ul li {
    padding: 8px 15px;
    border-radius: 10px;
    transition: 0.2s ease-in;
}
  
nav ul li a {
    color: black;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: white;
}
  
nav ul li:hover {
    background-color: green;
}
  
nav ul li a:hover {
    color: white;
}
  
nav .sideMenuButton {
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    display: none;
}
  
/* responsive navbar css */
@media screen and (max-width: 600px) {
    nav .sideMenuButton {
        display: flex;
    }
  
    nav .navbar {
        display: none;
    }
  
    .sideNavigationBar {
        display: block !important;
    }
}
  
.sideNavigationBar {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0%;
    background-color: green;
    overflow-x: hidden;
    transition: 0.3s ease-in;
    padding-top: 60px;
    display: none;
}
  
.sideNavigationBar a {
    padding: 8px 8px 8px 40px;
    display: block;
    font-size: 25px;
    font-weight: 500;
    color: #d1d1d1;
    transition: 0.3s;
    text-decoration: none;
}
  
.sideNavigationBar a button {
    padding: 10px 20px;
    border-radius: 10px;
    color: green;
    font-size: 16px;
    border-style: none;
    font-weight: 700;
}
  
.sideNavigationBar a:hover {
    color: white;
}
  
.sideNavigationBar .closeButton {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 20px;
    margin-left: 50px;
}
  
.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 5%;
}
  
.line .side1 {
    padding-right: 50px;
}
  
.side1 h1 {
    font-size: 60px;
    margin-bottom: 10px;
    color: green;
}
  
.side1 button {
    width: 200px;
    padding: 12px 20px;
    border-radius: 20px;
    border-style: none;
    color: black;
    font-size: 17px;
    font-weight: 600;
}
  
a {
    text-decoration: none;
    color: black;
}
  
/* Header content responsive */
@media screen and (max-width: 980px) {
    .side2 img {
        width: 350px;
    }
  
    .side1 h1 {
        font-size: 40px;
    }
  
    .side1 p {
        font-size: 17px;
    }
  
    .line {
        margin-top: 80px;
    }
}
  
@media screen and (max-width: 600px) {
    .side1 h1 {
        font-size: 35px;
    }
  
    .line {
        flex-direction: column;
    }
  
    .line .side1 {
        padding: 30px;
    }
}
  
/* section */
  
section .topic a {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
}
  
.about .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
  
.about .boxes .box {
    margin: 10px 20px;
    max-width: calc(100% / 3 - 50px);
    text-align: center;
    border-radius: 12px;
    padding: 30px 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    cursor: default;
}
  
/* Contact Page  */
  
.contact {
    padding: 20px;
}
  
.contact .content {
    margin: 0 auto;
    padding: 30px 0;
}
  
.content .title {
    width: 80%;
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
}
  
.title {
    margin-bottom: 30px;
    margin-left: 80px;
}
  
.contactMenu {
    display: flex;
    justify-content: space-evenly;
}
  
.input2 {
    margin-top: 10;
}
  
.label1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: bolder;
}
  
.contactMenu .input1 input {
    border-radius: 13px;
    padding: 6px;
}
  
.input2 input {
    border-color: rgb(252, 244, 244);
    width: 400px;
}
  
.button {
    margin-top: 12px;
    margin-left: 5px;
}
  
.button button {
    width: 162px;
    height: 35px;
    border-radius: 12px;
    border-color: transparent;
}
  
.button button:hover {
    background-color: #8cc099;
}
  
button {
    width: 162px;
    height: 35px;
    border-radius: 12px;
    border-color: transparent;
}
  
button:hover {
    background-color: #8cc099;
}
  
.rightside1 {
    display: flex;
    flex-direction: column;
    margin-left: 300px;
}
  
.title1 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 5px;
    font-weight: bolder;
}
  
.content1 {
    width: 450px;
    margin-top: 2px;
    color: grey;
}
  
/* Footer */
footer {
    background: var(--primary-color);
    padding: 15px 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
}
  
footer .footer span {
    font-size: 17px;
    font-weight: 400;
    color: var(--white-color);
}
  
footer .footer span a {
    font-weight: 500;
    color: var(--white-color);
}
  
footer .footer span a:hover {
    text-decoration: underline;
}
  
@media screen and (max-width: 1060px) {
    .contactMenu {
        flex-direction: column;
        align-items: center;
    }
  
    .rightside1 {
        display: flex;
        flex-direction: column;
        margin-left: 0px;
    }
  
    .content1 {
        width: 100%;
        margin-top: 2px;
        color: grey;
    }
  
    .side2 img {
        width: 95%;
        height: 90%;
    }
}
  
@media screen and (max-width: 600px) {
    .side2 img {
        width: 100%;
    }
  
    section .topic a {
        font-size: 20px;
    }
  
    section .topic p {
        font-size: 5px;
    }
  
    .about .boxes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
    .about .boxes .box {
        max-width: 70%;
    }
}

```
#   s p a r k l e  
 