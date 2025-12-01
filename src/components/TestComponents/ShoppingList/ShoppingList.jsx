import "./ShoppingList.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import Ring from "../../../assets/icons/Ring";
import Tick from "../../../assets/icons/Tick";
import { X } from "lucide-react";
import shoppingList from "./ShoppingList";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";

function ShoppingChecklist() {
  const currentPageData = pages.find((page) => page.link === "shoppingList");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component is a simple shopping list. You can add items, check them off and see how many items you have checked off, still need to check off and a percentage checked."
      />
      <ShoppingList />
    </>
  );
}

export default ShoppingChecklist;

// Shopping list wrapper
function ShoppingList() {
  const [list, setList] = useState(shoppingList);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  // Track item name entered
  function handleNewItemChange(e) {
    setNewItem(e.target.value);
  }

  // Track item quantity selected
  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }

  // Track selected category
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  // Handle item added to the list
  function handleAddItem(e) {
    e.preventDefault();

    // Don't do anything if blank or whitespace only
    if (!newItem.trim()) return;

    setList((prevList) => [
      ...prevList,
      {
        id: new Date().getTime(),
        quantity: Number(quantity),
        name: newItem.trim(),
        isPacked: false,
        category: category,
      },
    ]);

    // Reset form after submission
    setNewItem("");
    setQuantity(1);
    setCategory("");
  }

  // Handle packed state
  function handlePacked(itemId) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  }

  // Handle item deletion
  function handleDeleteItem(itemId) {
    setList((list) => list.filter((item) => item.id !== itemId));
  }

  // List stats
  const total = list.length;
  const packedItems = list.filter((item) => item.isPacked).length;
  const percentage = (packedItems / total) * 100;

  return (
    <>
      <p>
        Packed: {packedItems} of {total} ({Math.round(percentage)}%)
      </p>

      {/* Render shopping list items from the array */}
      <ul className="shopping-list">
        {list.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onPacked={() => handlePacked(item.id)}
            onDelete={() => handleDeleteItem(item.id)}
          />
        ))}
      </ul>

      {/* Props for new item form */}
      <AddItem
        newItem={newItem}
        quantity={quantity}
        onAddItem={handleAddItem}
        onNewItemChange={handleNewItemChange}
        onQuantityChange={handleQuantityChange}
        onCategoryChange={handleCategoryChange}
        onDelete={handleDeleteItem}
      />
    </>
  );
}

// Item in the shopping list
function ShoppingItem({ item, onPacked, onDelete }) {
  return (
    <li className="shopping-list__item" onClick={onPacked}>
      {item.isPacked ? (
        <Tick color="var(--text-green)" />
      ) : (
        <Ring color="var(--colour-neutral-200)" />
      )}

      {/* Conditionally show quantity when more than 1 */}
      <span className="shopping-list__item--name">
        {item.quantity > 1 ? (
          <p
            className={
              item.isPacked
                ? "shopping-list__item--name packed"
                : "shopping-list__item--name"
            }
          >
            {item.name} × {item.quantity}
          </p>
        ) : (
          <p
            className={
              item.isPacked
                ? "shopping-list__item--name packed"
                : "shopping-list__item--name"
            }
          >
            {item.name}
          </p>
        )}
      </span>

      {/* Item category */}
      {item.category}
      <IconButton icon={<X />} onClick={onDelete} />
    </li>
  );
}

// Add new item form
function AddItem({
  newItem,
  quantity,
  onAddItem,
  onNewItemChange,
  onQuantityChange,
  category,
  onCategoryChange,
}) {
  return (
    <form className="shopping-list__input" onSubmit={onAddItem}>
      {/* Item name */}
      <input
        type="text"
        placeholder="New item..."
        value={newItem}
        onChange={onNewItemChange}
      />

      {/* Item quantity */}
      <input
        className="shopping-list__quantity-input"
        type="number"
        placeholder="quantity"
        value={quantity}
        onChange={onQuantityChange}
      />

      {/* Item category */}
      <select
        className="shopping-list__category-input"
        value={category}
        onChange={onCategoryChange}
      >
        <option value="">Select category...</option>
        <option value="Meat">Meat & Poultry</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruit">Fruit</option>
        <option value="Dairy">Dairy & Eggs</option>
        <option value="Bakery">Bakery</option>
        <option value="Frozen">Frozen</option>
        <option value="Store Cupboard">Store Cupboard</option>
        <option value="Drinks">Drinks</option>
        <option value="Household">Household</option>
      </select>

      {/* Submit button */}
      <button type="submit" className="button__default">
        <Tick /> <p style={{ marginLeft: "6px", marginRight: "8px" }}>Submit</p>
      </button>
    </form>
  );
}
