import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Contact from './components/Contact'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Master from './layout/Master'
import Login from './components/Login'
import Registration from './components/Registration'
import AdminMaster from './components/Admin_components/AdminMaster'
import Order from './components/Admin_components/Order'
import Product from './components/Admin_components/Product'
import Category from './components/Admin_components/Category'
import Admincontact from './components/Admin_components/Admincontact'
import Dashboard from './components/Admin_components/Dashboard'
import Subcategory from './components/Admin_components/Subcategory'
import Alluser from './components/Admin_components/Alluser'
import CategoryAll from './components/Admin_components/category/CategotyAll'
import SubcategoryAll from './components/Admin_components/subcategory/SubcategotryAll'
import CategoryUpdate from './components/Admin_components/category/CategoryUpdate'
import SubcategoryUpdate from './components/Admin_components/subcategory/SubcategoryUpdate'
import ProductAll from './components/Admin_components/product/ProductAll'
import Cart from './components/Cart'
import Profile from './components/Profile'
import Wishlist from './components/Wishlist'
import ProductUpdate from './components/Admin_components/product/ProductUpdate'
import Message from './components/Message'
import Contactreply from './components/Admin_components/contact reply/Contactreply'


function App() {
  return (
          <>
          <BrowserRouter>  
             <Routes>   
                <Route path='/' element={<Master/>}> 
                <Route path='/' element={<Home/>}/> 
                <Route path='/shop' element={<Shop/>}/>        
                <Route path='/contact' element={<Contact/>}/>  
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Registration/>}/>
                <Route path='/cart' element={<Cart/>}/> 
                <Route path='/profile'element={<Profile/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
                <Route path='/message' element={<Message/>}/>
                </Route>
                <Route path='/admin' element={<AdminMaster/>}>
                <Route path="/admin" element={<Dashboard/>} /> 
                  <Route path='/admin/order' element={<Order/>}/>
                  <Route path='/admin/product' element={<Product/>}/>
                  <Route path='/admin/product/update/:id' element={<ProductUpdate/>}/>
                  <Route path='/admin/product/all' element={<ProductAll/>}/>
                  <Route path='/admin/category' element={<Category/>}/>
                  <Route path='/admin/category/all' element={<CategoryAll/>}/>
                  <Route path='/admin/category/update/:id'element={<CategoryUpdate/>}/>
                  <Route path='/admin/subcategory/update/:id' element={<SubcategoryUpdate/>}/>
                  <Route path='/admin/subcategory' element={<Subcategory/>}/>
                  <Route path='/admin/subcategory/all' element={<SubcategoryAll/>}/>
                  <Route path='/admin/admincontact' element={<Admincontact/>} /> 
                  <Route path='/admin/contact/reply/:id' element={<Contactreply/>}/>
                  <Route path='/admin/user' element={<Alluser/>}/> 
                              
                </Route>
              </Routes>
          </BrowserRouter>
          </>
  )
}
export default App
