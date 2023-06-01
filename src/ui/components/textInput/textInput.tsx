export function TextInput({
  label,
  name,
  placeholder,
  value,
  handleChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: any;
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type="string"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
