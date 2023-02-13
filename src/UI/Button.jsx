const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className="text-white py-2 disabled:bg-[#ccc] disabled:border-[#ccc] disabled:text-[#292929] disabled:cursor-not-allowed px-6 bg-[#ea6610] hover:bg-[#ef833b] rounded-md"
    >
      Submit
    </button>
  );
};

export default Button;
