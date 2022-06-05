import "./Input.style.css";

const Input = ({ label, error, isReadOnly, isNumber, ...props }) => {
  return (
    <div className="inputBase">
      <label className="inputLabel">
        <span className="label">{label}</span>
        <input
          onKeyPress={(event) => {
            if (isNumber && !/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          readOnly={isReadOnly}
          className="input"
          {...props}
        />
      </label>
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default Input;
