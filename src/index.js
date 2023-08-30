import { createRoot} from 'react-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App.jsx';
import './main.css';


const root = createRoot(document.getElementById('root'));
root.render(<App />);


//bcrypt = 60 digits, cost facotr 10
//$2y$10$2yL.V0aSUdJtOOd5LJb.BO8BPzv9rLQUk3qOkdZ0tnfS7bznttTnS
//$2y$10$tHWbdc02XVW8VEO2j67dvuCCtFXCXu2IJvYENID8dIGOTWKhvETxO
//$2y$10$t38z13.kZKbeYmEtf1dklO53Tvqvh6l3yb4E3/GwOxjZq6ks8kCTq
//$2y$10$FneRji5fmfpbZEQerD0MCOoa3A11EZhOrqXRG3zo6yDyHGc66deDK

// CREATE TABLE Orders (
//   OrderID int NOT NULL,
//   OrderNumber int NOT NULL,
//   PersonID int,
//   PRIMARY KEY (OrderID),
//   FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// );