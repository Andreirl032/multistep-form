const StepOne = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-blue-950">Personal Info</h1>
      <h5>Please provide your name, e-mail address, and phone number.</h5>

      <form className="flex gap-6 flex-col">
        <div className="flex flex-col gap-1">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="border-gray-300 border-solid border-2 outline-none rounded-md px-2 py-2"/>
        </div>

        <div className="flex flex-col gap-1">
      <label htmlFor="email">E-mail address:</label>
      <input type="email" name="email" className="border-gray-300 border-solid border-2 outline-none rounded-md px-2 py-2"/>
        </div>
      </form>
    </div>
  );
};
export default StepOne;