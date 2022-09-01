import { useEffect } from 'react';
const CalcEntry = ({ symbol, holding }) => {

  // creates the fetch call from user input 
  // let userInput = 'AAPL' // will be user input 
  // let fetchCall = `https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=`
  // let symbolQuery = fetchCall + userInput
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.FID_API,
  //     'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
  //   }
  // };

  //If you want to run this ONCE when the component loads || if you want this to run only when something in your state changes, useEffect!
  // useEffect(() => {
  //   runFetchResponse().then(data => {
  //     data
  //   });
  // })

  const getFetchResponse = async (symbolQuery) => {
    await fetch(symbolQuery, options)
      .then(response => response.json())
      .then(data => {
        let testData = data;
        // data from api call
        let averageStockPrice = testData.mashup.dividend.dividendDetails.dividendDetail[0].equityDetail.payoutRatioTTM
        let shares = 5 //input from user 
        let base = shares*averageStockPrice
        console.log(base)
      });

  }

  const runFetchResponse = async () => {
    return await getFetchResponse(symbolQuery);
  }

  runFetchResponse();

  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Symbol: {symbol}</p>   {/* will be userInput? */}
      <p className="grow">Holdings: {holding}</p> {/* will be shares? */}
      <button className="grow">Edit</button>

    </div>
  )
}

export default CalcEntry