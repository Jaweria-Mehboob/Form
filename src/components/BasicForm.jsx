import useInput from "../hooks/use-input";

import Button from "../UI/Button";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(firstName, lastName, email);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "border-red-500 bg-red-200 border-2"
    : "border-[#475569] focus:border-[#475569] focus:bg-[#f1f5f9]";

  const lastNameClasses = lastNameHasError
    ? "border-red-500 bg-red-200 border-2"
    : "border-[#475569] focus:border-[#475569] focus:bg-[#f1f5f9]";

  const emailClasses = emailHasError
    ? "border-red-500 bg-red-200 border-2"
    : "border-[#475569] focus:border-[#475569] focus:bg-[#f1f5f9]";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="flex gap-4 flex-wrap mb-5">
        <div className=" flex-1 min-w-[15rem]">
          <label htmlFor="first-name" className="block mb-1.5 font-bold">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={`block w-[20rem] max-w-full focus:outline-none focus:border-[#475569] focus:border-2 focus:bg-[#f1f5f9] py-1.5 px-1.5 border border-[#cbd5e1] rounded-sm ${firstNameClasses}`}
          />
          {firstNameHasError && (
            <p className="text-red-500">Firstname must not be empty.</p>
          )}
        </div>
        <div className="flex-1 min-w-[15rem]">
          <label htmlFor="last-name" className="block mb-1.5 font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={`block w-[20rem] max-w-full focus:outline-none focus:border-[#475569] focus:border-2 focus:bg-[#f1f5f9] py-1.5 px-1.5 border border-[#cbd5e1] rounded-sm ${lastNameClasses}`}
          />
          {lastNameHasError && (
            <p className="text-red-500">Lastname must not be empty.</p>
          )}
        </div>
      </div>
      <div className="mb-5 flex-1 min-w-[15rem]">
        <label htmlFor="email" className="block mb-1.5 font-bold">
          E-Mail Address
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={`block w-[20rem] max-w-full focus:outline-none  focus:border-[#475569] focus:border-2 focus:bg-[#f1f5f9] py-1.5 px-1.5 border border-[#cbd5e1] rounded-sm ${emailClasses}`}
        />
        {emailHasError && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
      </div>
      <div className="text-right">
        <Button disabled={!formIsValid} />
      </div>
    </form>
  );
};

export default BasicForm;
