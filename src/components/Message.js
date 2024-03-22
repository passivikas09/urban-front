import { useEffect } from "react"
import Apiservices from "./api/Apiservices"

export default function Message(){
useEffect(()=>{
    let data={
        _id:sessionStorage.getItem("Id")
    }
    Apiservices.contactreply(data).then((res)=>{
        console.log(res)
    }).catch(()=>{

    })
},[])   
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>
                                    <th>Sno.</th>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>message</th>
                                    <th>Reply</th>
                                </td>
                            </tr>
                        </thead>

                    </table>
                </div>
            </div>
          </div>  
        </>
    )
}