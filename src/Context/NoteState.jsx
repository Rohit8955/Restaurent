import React, { useState } from "react";
import NoteContext from "./Notes/NoteContext";
import { arr } from "../Components/SampleOutput";
const NoteState = ({children})=>{
    const [data,setdata] = useState(arr)
    const[buttonclicked,setbuttonclicked] = useState([false,false,false,true]);
    const[cartarr,setcartarr] = useState([]);
    const[freqcount,setfreqcount] = useState(0);
    const[amount,setamount] = useState(0);
    const datastate = (category,index)=>{
        const newbuttonclicked = [false,false,false,false]
        newbuttonclicked[index] = true;
        setbuttonclicked(newbuttonclicked);
        if(category==="All") {
            setdata(arr);
        }
        else{
            const newdata = arr.filter((elem,idx)=>{
                return elem.category === category
            })
            setdata(newdata);
        }
    }


    const navtitlearr = [...new Set(arr.map((elem)=>{
        return elem.category
    }))]
    navtitlearr.push("All")

    const search = (value)=>{
        const str = value;
        if(str===''){
            const prevActive = buttonclicked.findIndex(elem => elem===true);
            const prevState = navtitlearr[prevActive];
            if(prevState==="All") {
                setdata(arr);
            }
            else{
                const newdataqq = arr.filter((elem)=>{
                    return elem.category === prevState
                })
                setdata(newdataqq);
            }
        }
        else{
            const searchdata = arr.filter((elem)=>{
                const s = elem.name.toLowerCase();
                return s.includes(str.toLowerCase(),0);
            })
            setdata(searchdata)
        }
    }

    const addtocart = (index) =>{
        setfreqcount(freqcount+1);
        
        const obj = data[index];
        const updateobj = {
            ...obj, quantity:1
        }
        setcartarr(cartarr => [...cartarr,updateobj]);
        setamount(amount+data[index].price)
        // alert("Item Added Successfully")
    }

    const increase = (index) => {
        setfreqcount(freqcount+1);
        setamount(amount+cartarr[index].price)
        const duplicatecart = [...cartarr];
        duplicatecart[index] = {...duplicatecart[index],quantity:duplicatecart[index].quantity+1};
        setcartarr(duplicatecart);
    }

    const decrease = (index) => {
        
        const duplicatecart = [...cartarr];
        if(duplicatecart[index].quantity===1){
            removefromcart(index);
        }
        else{
            setfreqcount(freqcount-1);
            setamount(amount-cartarr[index].price)
            duplicatecart[index] = {...duplicatecart[index],quantity:duplicatecart[index].quantity-1};
            setcartarr(duplicatecart);
        }
    }
        const removefromcart = (index) => {
        let c = cartarr[index].quantity
        setamount(amount-(cartarr[index].price*c))
        setfreqcount(freqcount-cartarr[index].quantity);
        const newcartarr = cartarr.filter((elem,idx)=>{
            return idx!==index
        })
        setcartarr(newcartarr)
    }
    return (
        <NoteContext.Provider value={{ data,datastate,buttonclicked,search,addtocart,cartarr,increase,decrease,freqcount,removefromcart,amount }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState