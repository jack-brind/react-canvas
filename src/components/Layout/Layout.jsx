// Layout.jsx
import { useState } from "react";
import "./Layout.css";
import Navigation from "../Navigation/Navigation";
import ContentArea from "../ContentArea/ContentArea";

function Layout() {
  // Remove the props
  const [currentPage, setCurrentPage] = useState("houseCards");

  return (
    <div className="base__layout">
      <aside>
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </aside>
      <main>
        <ContentArea currentPage={currentPage} />
      </main>
    </div>
  );
}

export default Layout;
