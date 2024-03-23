export default function FormattedPrice({ a }) {
  const priceString = typeof a === 'number' ? a.toString() : '';

  if (!priceString.includes(".")) {
      return (
          <div className="price">
              <span className="price">
                  {priceString}
              </span>
              <span className='price-fraction'>
                  00
              </span>
          </div>
      );
  } else {
      const [integerPart, decimalPart] = priceString.split(".");
      return (
        <div className="price">
              <span className="price">
                  {integerPart}
              </span>
              <span className='price-fraction'>
                  {decimalPart}
              </span>
          </div>
      );
  }
}

