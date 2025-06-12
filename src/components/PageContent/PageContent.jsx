import "./PageContent.css";

function PageContent({ title, icon, subtitle, children }) {
  return (
    <>
      <div className="page__header">
        <div className="page__header--header">
          {icon}
          <h1>{title}</h1>
        </div>
        <div className="page__header--subtitle">
          <p>{subtitle}</p>
          <hr />
        </div>
      </div>
      {children}
    </>
  );
}

export default PageContent;
