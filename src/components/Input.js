export default function Input({
  type,
  name,
  placeholder,
  value,
  style,
  onChange,
  min,
}) {
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={` tw-p-2 tw-rounded-xl tw-border ${style}`}
      min={min}
    />
  );
}
