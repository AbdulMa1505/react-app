import React,{useState} from 'react';
function OnChange(){
    const[name,setName]=useState("Guest");
    const[comment,setComment]=useState("");
    const[quantity,setQuantity]=useState(0);
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("USA");
const Handleshipping=(event)=>{
    setShipping(event.target.value);

}
const HandlePaymentChange=(event)=>{
    setPayment(event.target.value);
}
    const HandleComment=(event)=>{
        setComment(event.target.value);
    }
    function handleElementChange(event){
        setName(event.target.value);
    }
    const HandleQuantity=(event)=>{
        setQuantity(event.target.value);
    }
    return(
    <>
        <div>
                <input value={name} onChange={handleElementChange} />
                <p>Name:{name}</p>


                <input type="number"  value={quantity} onChange={HandleQuantity}/>
                <p>Quantity:{quantity}</p>
                <textarea value={comment} onChange={HandleComment} placeholder="Enter delivery Instruction"> </textarea>
                <p>Comment:{comment}</p>
                <select value={payment} onChange={HandlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">Gift Card</option>
                </select>
                <p>payment:{payment}</p>
                <label >
                    <input type="radio" value="Pick Up" checked={shipping==="Pick Up"}
                    onChange={Handleshipping}/>
                    Store Pick Up
                </label>
                <label >
                    <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                    onChange={Handleshipping} />
                    Delivery
                </label>
                <p>Shipping:{shipping}</p>



                
        </div>
    </>);

}
export default OnChange