import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <h1>app.js </h1> */}
     {/* <Home></Home>
     <Users></Users>
     <AddUser></AddUser>
     <UpdateUser></UpdateUser>
     <Header></Header> */}
     
       <BrowserRouter>
       <Header></Header>
       <Routes>
        <Route path="/home"  index element={<Home />} />   
        <Route path="/users"  index element={<Users />} />   
        <Route path="/users/add"  index element={<AddUser />} />   
        <Route path="/users/update/:id"  index element={<UpdateUser />} />  
       </Routes>
       </BrowserRouter> 
   

   


    </div>
  );
}

export default App;
