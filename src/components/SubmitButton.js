/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Apr 14 2022 12:11:50 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Spinner from "./Spinner";

const SubmitButton = ({ label, isDisabled, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="w-full flex items-center gap-1 justify-center capitalize p-3 rounded-md 
      text-white bg-green-600 hover:bg-green-600/90 duration-200 disabled:bg-gray-500"
      disabled={isDisabled}
    >
      {isSubmitting && <Spinner />}
      <p className="text-lg">{label}</p>
    </button>
  );
};

export default SubmitButton;
