import "./ShoppingList.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { IconCircleCheckFilled, IconCircleCheck } from "@tabler/icons-react";
import { shoppingList } from "./ShoppingList";
import { useState } from "react";

function ShoppingList() {
  return (
    <ul className="shopping-list">
      {shoppingList.map((item) => (
        <ShoppingItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          isPacked={item.isPacked}
          categories={item.categories}
        />
      ))}
    </ul>
  );
}

function AddItem() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleItems(e) {
    setItem(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="New item..."
        value={item}
        onChange={handleItems}
      />
      <input
        type="number"
        placeholder="quantity"
        value={quantity}
        onChange={handleQuantity}
      />
      <button className="button__default">
        <IconCircleCheckFilled />
      </button>
    </>
  );
}

function ShoppingItem({ name, quantity, categories, isPacked }) {
  const [packed, setPacked] = useState(isPacked);

  function handlePacked() {
    setPacked(!packed);
  }

  return (
    <li className="shopping-list__item" onClick={handlePacked}>
      <button onClick={handlePacked}>
        {packed ? (
          <IconCircleCheckFilled color="#02B17B" />
        ) : (
          <IconCircleCheck color="var(--colour-neutral-100)" />
        )}
      </button>
      <div className="shopping-list__item--name">
        {quantity > 1 ? (
          <span
            className={
              packed
                ? "shopping-list__item--name packed"
                : "shopping-list__item--name"
            }
          >
            {quantity} × <p>{name}</p>
          </span>
        ) : (
          <span
            className={
              packed
                ? "shopping-list__item--name packed"
                : "shopping-list__item--name"
            }
          >
            <p>{name}</p>
          </span>
        )}
      </div>
      {categories}
    </li>
  );
}

function ShoppingChecklist() {
  const currentPageData = pages.find((page) => page.link === "shoppingList");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a simple shopping list."
      />
      <ShoppingList />
      <AddItem />
    </>
  );
}

export default ShoppingChecklist;
