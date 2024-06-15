import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from '../../contexts/Order/OrderContext';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext';
function SuccessPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    let { processOrder } =useContext(OrderContext);
    let {EmptyCart}=useContext(CartContext)
    const saveOrder=async()=>{
        try {
            let res = await processOrder();
            if (res.status == 200) {
              toast.success("Order Successfully placed", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                draggable: false,
                closeOnClick: false,
                theme: "colored",
                transition: toast.flip,
                onClose: () => {
                //   EmptyCart();
                  window.location.href = "/";
                },
              });
            }
          } catch (e) {
            toast.error(e.response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              draggable: false,
              closeOnClick: false,
              theme: "colored",
              transition: toast.flip,
            });
        }
    }
  useEffect(() => {
    let checkStatus=searchParams.get("redirect_status") 
    if(checkStatus=="succeeded"){
        saveOrder();
        }
        
    else{
        window.location.href="/"
    }
  }, [])
  
  return (
    <div>
      fgd
    </div>
  )
}

export default SuccessPage
