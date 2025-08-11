import "./PageContent.css";

function PageContent({ title, icon, subtitle, children }) {
  return (
    <>
      <div className="page__header">
        <div className="page__header--header">
          {icon}
          <h1 className='page__title'>{title}</h1>
        </div>
        <div className="page__header--subtitle">
          <p style={{ width: "720px", color: "var(--text-secondary)" }}>
            {subtitle}
          </p>
          <hr />
        </div>
      </div>
      {children}
    </>
  );
}

export default PageContent;
