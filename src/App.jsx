import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const vatRate = 0.07; // 7% VAT

  const calculate = () => {
    const p = parseFloat(price) || 0;
    const dp = parseFloat(discountPercent) || 0;

    const discountAmount = (p * dp) / 100;
    const net = p - discountAmount;
    const vat = net * vatRate;
    const total = net + vat;

    return {
      discountAmount: discountAmount.toFixed(2),
      netPrice: net.toFixed(2),
      vatAmount: vat.toFixed(2),
      totalPrice: total.toFixed(2),
    };
  };

  const { discountAmount, netPrice, vatAmount, totalPrice } = calculate();

  return (
    <div className="app-container">
      <h2>VAT Calculator</h2>

      <div>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
        />
      </div>

      <div>
        <label>Discount (%): </label>
        <input
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          placeholder="Enter discount %"
        />
      </div>

      <div className="result">
        <p>VAT Rate = 7%</p>
        <p>Discount Amount = {discountAmount}</p>
        <p>Gross Price (after discount) = {netPrice}</p>
        <p>VAT Amount = {vatAmount}</p>
        <p><strong>Total Price (including VAT) = {totalPrice}</strong></p>
      </div>
    </div>
  );
}

export default App;