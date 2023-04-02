

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Profile(){

    const [user,setUser]=useState({});
    
   
    useEffect(() => {
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
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
      fetchEmpList();
    }, []);
    
    

    const styles = {

      cardImage: {
        width: '10vw',
        height: '10vh'
      }
    }


    return (
      <div>
        <Card>
          <Card.Body>
          <Card.Title>{user.name}</Card.Title> 
         
            <Card.Subtitle>Logged in as: {user.email}</Card.Subtitle>
          
          </Card.Body>
        </Card>
      
    </div>

    );


      

};



export default Profile;