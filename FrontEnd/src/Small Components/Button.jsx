const Button = ({ value }) => {
  return (
    <button className="cursor-pointer group relative flex gap-1.5 px-7 py-2 my-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-xl hover:bg-opacity-70 transition font-medium shadow-md">
      {value}
    </button>
  );
};

export default Button;
