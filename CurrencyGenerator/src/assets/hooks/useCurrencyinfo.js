import { useEffect, useState } from "react";

function useCurrencyInfo(from = "USD", to = "PKR", amount = 1) {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
      .then((res) => res.json())
      .then((data) => setRate(data.result));
  }, [from, to, amount]);

  return rate;
}

export default useCurrencyInfo;
