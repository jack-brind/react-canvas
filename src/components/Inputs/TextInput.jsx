function TextInput({ placeholder = "", defaultValue = "" }) {
  return (
    <input type="text" placeholder={placeholder} defaultValue={defaultValue} />
  );
}

export default TextInput;
