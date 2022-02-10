import {toast} from "react-toastify"
const cart = []

const cartReducer = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find(pro => pro.id === product.id);
            if (exist) {
                toast.success(` product ${product.title} Quantity increase`,{
                    position:"bottom-left"
                })
                return( state.map(pro =>
                    pro.id === product.id ? { ...pro, quantity: pro.quantity + 1 } : pro
                ))
            } else {
                const product = action.payload;
                toast.success(`save product ${product.title}`,{
                    position:"bottom-left"
                })
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
                 
            }
            case "DELITEM":
                const existpProduct = state.find(pro => pro.id === product.id);
                // localStorage.removeItem("userProducts")
                if(existpProduct.quantity===1){
                    toast.warning("delete product",{
                        position:"bottom-left"
                    })
                    return state.filter(pro=>pro.id!==existpProduct.id);

                }else{
                    toast.info("quantity decrease",{
                        position:"bottom-left"
                    })
                    return state.map(pro=>
                        pro.id===product.id?{...pro,quantity:pro.quantity-1}:pro)
                }
                default:
                    return state;
    }
}
export default cartReducer