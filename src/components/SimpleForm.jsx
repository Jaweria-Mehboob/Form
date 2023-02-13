import useInput from "../hooks/use-input";

import Button from "../UI/Button";

const SimpleForm = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    console.log(email);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "border-red-500 bg-red-200 border-2"
    : "border-[#475569] focus:border-[#475569] focus:bg-[#f1f5f9]";

  const emailInputClasses = emailInputHasError
    ? "border-red-500 bg-red-200 border-2"
    : "border-[#475569] focus:border-[#475569] focus:bg-[#f1f5f9]";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="mb-5 flex-1 min-w-[15rem]">
        <label htmlFor="name" className="block mb-1.5 font-bold">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          className={`w-[20rem] max-w-full focus:outline-none focus:border-2 py-1.5 px-1.5 border border-[#cbd5e1] rounded-sm ${nameInputClasses}`}
        />
        {nameInputHasError && (
          <p className="mt-2 text-red-500">Name must not be empty.</p>
        )}
      </div>
      <div className="mb-5 flex-1 min-w-[15rem]">
        <label htmlFor="email" className="block mb-1.5 font-bold">
          E-Mail
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          className={`w-[20rem] max-w-full focus:outline-none focus:border-2 py-1.5 px-1.5 border border-[#cbd5e1] rounded-sm ${emailInputClasses}`}
        />
        {emailInputHasError && (
          <p className="mt-2 text-red-500">
            Please enter a valid email address.
          </p>
        )}
      </div>
      <div className="text-right">
        <Button disabled={!formIsValid} />
      </div>
    </form>
  );
};

export default SimpleForm;
