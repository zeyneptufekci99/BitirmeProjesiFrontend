import "./Textarea.style.css";

const Textarea = ({ label, error, isReadOnly, ...props }) => {
  return (
    <div className="inputBase">
      <label className="inputLabel">
        <span className="label">{label}</span>
        <textarea readOnly={isReadOnly} className="input" {...props} />
      </label>
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default Textarea;
