const FormInput = ({ label, name, type, value, onChange }) => {
  return (
    <div class="p-4 flex items-center gap-2">
      <div class=" w-1/4 text-gray-500 font-bold " for="inline-full-name">
        {label}
      </div>
      <div class="w-3/4">
        <input
          class="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounde px-2 rounded-lg py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default FormInput;
