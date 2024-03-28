function FormBackground({ form }) {
  return (
    <div
      className={`background ${form === "login" ? "h-[520px]" : "h-[740px]"}`}
    >
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
}

export default FormBackground;
