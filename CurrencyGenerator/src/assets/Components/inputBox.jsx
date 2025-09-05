import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyinfo";

function InputBox() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");

  const converted = useCurrencyInfo(from, to, amount);

  return (
    <div className="max-w-sm p-5 mx-auto bg-white rounded-3xl shadow-lg">
      <h2 className="text-2xl mb-4 font-bold">Currency Converter</h2>

      {/* Amount input */}
      <label className="mb-1 font-medium block">Amount in {from}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        className="p-2 border w-full mb-4 rounded"
      />

      {/* From Currency */}
      <label className="mb-1 font-medium block">From</label>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="p-2 border w-full mb-4 rounded"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      {/* To Currency */}
      <label className="mb-1 font-medium block">To</label>
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value.toUpperCase())}
        placeholder="PKR"
        className="p-2 border w-full mb-4 rounded"
      />

      {/* Result */}
      <p className="text-lg font-medium">
        {amount} {from} = {converted ? `${converted} ${to}` : "Loading..."}
      </p>
    </div>
  );
}

export default InputBox;
