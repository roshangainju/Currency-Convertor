import { useEffect, useState } from "react"

const useCurrencyInfo=(currency)=>{
    const [data, setData]=useState({})


useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    // .then((res)=>setData(res))
    // console.log(data)
},[currency])

console.log(data)

   return data
    
}
export default useCurrencyInfo

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useCurrencyInfo = (currency) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         );
//         setData(response.data[currency]);
//         console.log(data); // This will log the previous value of 'data' due to the closure.
//       } catch (error) {
//         // Handle errors here
//        fetchData();
//       }
//     };

    
//   }, [currency]);

//   console.log(data); // This will log the previous value of 'data' due to the closure.

//   return data;
// };

// export default useCurrencyInfo;
