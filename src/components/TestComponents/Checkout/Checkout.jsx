import "./Checkout.css";
import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { furniture, discountCodes } from "./basket.js";
// import { apple, discountCodes } from "./basket.js";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Check, X, Delete, ShoppingBasket } from "lucide-react";
import currencyDisplay from "../../../helpers/currencyDisplay";
import IconButton from "../../IconButton/IconButton";
import Banner from "../../Banner/Banner";
import { IoInformationCircleSharp } from "react-icons/io5";
import Tick from "../../../assets/icons/Tick";

// ============ Housing component ============
export default function Checkout() {
  const currentPageData = pages.find((page) => page.link === "checkout");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This checkout component is intended to simulate a shopping cart and paying the price for the item(s). It includes lots of practice with state (+ lifting up state and derived state) as well as event handlers and component composition. Each time an item is removed or the quantity is changed, the price updates. You get free delivery if you spend over £1,000 and you can apply one of the following discount codes: WELCOME5, SUMMER10 or MEGADEAL20."
      />
      <CheckoutComponent />
    </>
  );
}

// Main checkout component
function CheckoutComponent() {
  const [basketData, setBasketData] = useState(furniture);
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  // Quantity derived from basketData state
  const basketQuantity = basketData.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  // Update object when quantity changes
  function handleQuantityChange(itemId, newQuantity) {
    setBasketData((currentBasket) =>
      currentBasket.map((item) =>
        item.id === itemId ? { ...item, quantity: +newQuantity } : item,
      ),
    );
  }

  // Basket item removal
  function handleDeleteItem(itemId) {
    setBasketData((currentBasket) =>
      currentBasket.filter((item) => item.id !== itemId),
    );
  }

  // Applied discount
  function handleDiscountApply(discountData) {
    setAppliedDiscount(discountData);
  }

  // Calculated total price
  const subtotal = basketData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Calculated total after discount applied
  const discountAmount = appliedDiscount
    ? subtotal * (appliedDiscount.discount / 100)
    : 0;

  // Shipping information
  const shippingThreshold = 1000;
  const shippingCost = 8.99;

  const shipping =
    basketQuantity > 1 && subtotal < shippingThreshold ? shippingCost : 0;

  const calcShipping = function (a, b) {
    return a - b;
  };
  const shippingResult = calcShipping(shippingThreshold, subtotal);

  // Calculated discount amount
  const total = subtotal - discountAmount + shipping;

  //Calculated amount of VAT
  const vatAmount = (subtotal / 1.2) * 0.2;

  return (
    <div className="checkout">
      {/* Shipping information banner */}
      {subtotal < shippingThreshold ? (
        <Banner
          intent="information"
          isSlim
          shippingThreshold={shippingThreshold}
          subtotal={subtotal}
        >{`Spend another ${currencyDisplay(shippingResult)} to qualify for free delivery!`}</Banner>
      ) : (
        ""
      )}

      {/* Basket header with quantity of items */}
      <BasketHeader numItems={basketQuantity} />

      {/* Items in the basket */}
      {basketData < 1 ? (
        <div className="no-items">
          <ShoppingBasket className="no-items-icon" />
          <p>No items in basket</p>
        </div>
      ) : (
        <BasketItems
          items={basketData}
          onQuantityChange={handleQuantityChange}
          onDeleteItem={handleDeleteItem}
        />
      )}

      {/* Discount code entry */}
      <DiscountCodes
        codes={discountCodes}
        onDiscountApply={handleDiscountApply}
        basketQuantity={basketQuantity}
      />

      {/* Monetary summary of basket */}
      <BasketSummary
        subtotal={subtotal}
        shipping={shippingCost}
        shippingCost={shippingCost}
        discountAmount={discountAmount}
        discount={appliedDiscount}
        shipping={shipping}
      />

      {/* Total price for the basket */}
      <BasketTotal total={total} vat={vatAmount} />

      {/* Button to pay for the basket */}
      <Pay total={total} basketQuantity={basketQuantity} />
    </div>
  );
}

// Basket header component
function BasketHeader({ numItems }) {
  return <h2 className="basket-header">My basket ({numItems})</h2>;
}

// Basket items wrapper component
function BasketItems({ items, onQuantityChange, onDeleteItem }) {
  return (
    <ul className="basket-item">
      {items.map((item) => (
        <li key={item.id} className="item__container">
          <BasketItem
            item={item}
            onQuantityChange={onQuantityChange}
            onDeleteItem={onDeleteItem}
          />
        </li>
      ))}
    </ul>
  );
}

// Basket item component
function BasketItem({ item, onQuantityChange, onDeleteItem }) {
  // Function to handle the new quantity
  function handleQuantity(newQuantity) {
    onQuantityChange(item.id, newQuantity);
  }

  // Function to handle item removal
  function handleDelete() {
    onDeleteItem(item.id);
  }

  return (
    <>
      <div className="item__thumbnail">
        <img src={`/furniture/${item.thumbnail}.png`} />
        {/* <img src={`/basket/${item.thumbnail}.png`} /> */}
      </div>
      <div className="item__details">
        <div className="item__title-metadata">
          <h3>{item.name}</h3>
          <div>
            {item.metadata.map((data, index) => (
              <span key={index} className="metadata">
                {data}
                {index < item.metadata.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>

        <select
          className="item__details--quantity"
          value={item.quantity}
          onChange={(e) => handleQuantity(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="item__price">
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(item.price * item.quantity)}
      </div>

      <div>
        <IconButton size="sm" type="ghost" onClick={handleDelete}>
          <RiDeleteBin5Fill fill="var(--text-subtle)" />
        </IconButton>
      </div>
    </>
  );
}

// Discount code entry component
function DiscountCodes({ codes, onDiscountApply, basketQuantity }) {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [hasAttempted, setHasAttempted] = useState(false);

  // Function to handle the code input
  function handleCodeInput(e) {
    setDiscountCode(e.target.value);
  }

  // Function to validate the code
  function handleApplyCode() {
    setHasAttempted(true);
    const foundCode = codes.find((item) => item.code === discountCode);
    setDiscountCode("");

    if (foundCode) {
      setAppliedDiscount(foundCode);
      onDiscountApply(foundCode);
    } else {
      setAppliedDiscount(null);
      onDiscountApply(null);
    }
  }

  return (
    basketQuantity > 1 && (
      <div>
        <div className="discount-section">
          <input
            type="text"
            placeholder="Enter discount code"
            onChange={handleCodeInput}
            value={discountCode}
          />
          <button className="apply-button" onClick={handleApplyCode}>
            Apply
          </button>

          {hasAttempted && (
            <span>
              {appliedDiscount ? (
                <div className="code-check valid-code">
                  <Check />
                  <p>{`${appliedDiscount.discount}% discount applied!`}</p>
                </div>
              ) : (
                <div className="code-check invalid-code">
                  <X />
                  <p>Invalid code</p>
                </div>
              )}
            </span>
          )}
        </div>
      </div>
    )
  );
}

// Basket summary component
function BasketSummary({ subtotal, discountAmount, shipping, discount }) {
  return (
    <div className="summary">
      <div className="summary-label">
        <h4>Subtotal</h4>
        <span>{currencyDisplay(subtotal)}</span>
      </div>
      <div className="summary-label">
        <h4>Shipping</h4>
        <span>{shipping > 0 ? currencyDisplay(shipping) : "FREE"}</span>
      </div>
      {discountAmount > 0 && (
        <div className="summary-label">
          <h4>{`Discount (${discount.discount}%)`}</h4>
          <span>{currencyDisplay(discountAmount)}</span>
        </div>
      )}
    </div>
  );
}

// Basket total component
function BasketTotal({ total, vat }) {
  return (
    <div className="summary">
      <h2>Total: {currencyDisplay(total)}</h2>
      {/* VAT calculation based on subtotal */}
      <p className="vat__summary">{`Includes VAT of ${currencyDisplay(vat)}`}</p>
    </div>
  );
}

// Basket pay component
function Pay({ total, basketQuantity }) {
  return (
    <button
      disabled={basketQuantity === 0}
      className="apply-button pay"
      onClick={() =>
        alert(`✓ Payment successful – ${currencyDisplay(total)} paid!`)
      }
    >{`Pay ${currencyDisplay(total)}`}</button>
  );
}
