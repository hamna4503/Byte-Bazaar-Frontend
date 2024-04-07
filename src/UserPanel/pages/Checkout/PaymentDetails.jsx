export default function PaymentDetails(){
    return (
      <form className="w-full mx-auto px-10">
        <h2 className="text-2xl text-center text-black mb-8">
          Payment Details
        </h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Cardholder's Name"
              autoComplete="off"
              required
              //   onChange={handleChange}
              // value={orderData.address}
            />
          </div>
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Card Number"
              autoComplete="off"
              required
              //   onChange={handleChange}
              // value={orderData.address}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mt-8 mb-2">
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="expiry"
              type="text"
              placeholder="Card's Expiry Date"
              autoComplete="off"
              required
              onFocus={(e) => (e.target.type = "date")} // Change type to date when focused
              onBlur={(e) => (e.target.type = "text")} // Change type back to text when blurred
            />
          </div>
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="cvv"
              type="number"
              placeholder="Card Verification Value"
              autoComplete="off"
              required
              //   onChange={handleChange}
              // value={orderData.address}
            />
          </div>
        </div>
      </form>
    );
}