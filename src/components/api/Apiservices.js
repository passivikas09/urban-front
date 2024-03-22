import axios from "axios"
import qs from "qs"
const BASE_URL="https://sangria-centipede-ring.cyclic.app/"
class ApiServices{
    getToken(){
        let obj={
            Authorization:sessionStorage.getItem("token")
        }
        return obj
    }
    login(data){
        return axios.post(BASE_URL+"api/login",qs.stringify(data))
    }
    reg(data){
        return axios.post(BASE_URL+"api/adduser",qs.stringify(data))
    }
    alluser(){
        return axios.post(BASE_URL+"admin/user/all")
    }
    deleteuser(data){
        return axios.post(BASE_URL+"admin/user/delete",data,{headers:this.getToken()})
    }
    singleuser(data){
        return axios.post(BASE_URL+"api/user/single",data,{headers:this.getToken()})
    }
    //enquiry
    enquiryAll(){
         return axios.post(BASE_URL+"admin/contact/all")
    }
    enquiryAdd(data){
        return axios.post(BASE_URL+"admin/contact/add",qs.stringify(data))
    }
    enquiryDelete(data){
        return axios.post(BASE_URL+"admin/contact/delete",data,{headers:this.getToken()})
    }
    enquirySingle(data){
        return axios.post(BASE_URL+"admin/contact/single",data,{headers:this.getToken()})
    }
    enquiryReply(data){
        return axios.post(BASE_URL+"admin/contact/reply",data,{headers:this.getToken()})
    }
    

    // category
    categoryUpload(data){
        return axios.post(BASE_URL+"admin/category/add",data,{headers:this.getToken()})
    }
    allcategory(){
        return axios.post(BASE_URL+"admin/category/all")
    }
    deletecategory(data){
        return axios.post(BASE_URL+"admin/category/delete",data,{headers:this.getToken()}) 
    }
    singleCategory(data){
        return axios.post(BASE_URL+"admin/category/single",data,{headers:this.getToken()})
    }
    updatecategory(data){
        return axios.put(BASE_URL+"admin/category/update",data,{headers:this.getToken()})
    }
    //subcategory
    subcategoryUpload(data){
        let obj={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"admin/subcategory/add",data,{headers:obj})
    }
    subcategoryAll(){
        return axios.post(BASE_URL+"admin/subcategory/all")
    }
    subcategorySingle(data){
        return axios.post(BASE_URL+"admin/subcategory/single",data,{headers:this.getToken()} )
    }
    updateSubcategory(data){
        return axios.put(BASE_URL+"admin/subcategory/update",data,{headers:this.getToken()})
    }
    subcategoryDelete(data){
        let obj={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"admin/subcategory/delete",data,{headers:obj})
    }

    //dashboard
    dashboard(){
        return axios.post(BASE_URL+"admin/dashboard")
    }
    
    //product
    ProductAll(){
        return axios.get(BASE_URL+"admin/product/all")
    }
    ProductAdd(data){ 
        return axios.post(BASE_URL+'admin/product/add',data,{headers:this.getToken()})
    }
    ProductSingle(data){
        return axios.post(BASE_URL+"admin/product/single",data,{headers:this.getToken()})
    }
    ProductDelete(data){
        return axios.post(BASE_URL+"admin/product/delete",data,{headers:this.getToken()})
    }
    ProductUpdate(data){
        return axios.put(BASE_URL+"admin/product/update",data,{headers:this.getToken()})
    }
    CategorywiseProduct(data){
        return axios.post(BASE_URL+"api/product/categorywise",data)
    }
    maxandmin(data){
        return axios.post(BASE_URL+"api/product/maxandmin",data)
    }
    productSearch(data){
        return axios.post(BASE_URL+"api/product/searchall",qs.stringify(data))
    }
    //order
    orderAll(){
        return axios.post(BASE_URL+"admin/order/all",{headers:this.getToken()})
    }
    
    
    //cart
    Addtocart(data){
        return axios.post(BASE_URL+"api/cart/add",data,{headers:this.getToken()})
    }
    cartAll(data){
        return axios.post(BASE_URL+"api/cart/all",data,{headers:this.getToken()})
    }
    //wishlist 
    Allwish(data){
        return axios.post(BASE_URL+"api/wishlist/all",data)
    }
    addtowishlist(data){
        return axios.post(BASE_URL+"api/wishlist/add",data,{headers:this.getToken()})
    }
    removecart(data){
        return axios.post(BASE_URL+"api/cart/remove",data,{headers:this.getToken()})
    }

    deletewish(data){
        return axios.post(BASE_URL+"api/wishlist/remove",data,{headers:this.getToken()})
    }
    //users

    //category
    singlecategory(data){
        return axios.post(BASE_URL+"api/category/single",data,{headers:this.getToken()})
    }

    //products
    allproduct(){
        return axios.get(BASE_URL+'api/product/all')
    }

    //place order
    orderAdd(data){
        return axios.post(BASE_URL+"api/order/add",data,{headers:this.getToken()})
    }
    //contact
    contactreply(data){
        return axios.post(BASE_URL+"api/contact/single",data,{headers:this.getToken()})
    }

}

export default new ApiServices