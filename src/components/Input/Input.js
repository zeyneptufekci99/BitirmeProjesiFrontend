import "./Input.style.css";

const Input = ({ label, error, isReadOnly, ...props }) => {
  return (
    <div className="inputBase">
      <label className="inputLabel">
        <span className="label">{label}</span>
        <input readOnly={isReadOnly} className="input" {...props} />
      </label>
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default Input;
