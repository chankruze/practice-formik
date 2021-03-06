/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Apr 14 2022 20:23:09 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { ErrorMessage, Field } from "formik";
import ErrorDiv from "./ErrorDiv";

const TextArea = ({ id, name, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <Field
        id={id}
        as="textarea"
        name={name}
        className="my-1 px-3 py-2 w-full bg-white border text-lg rounded-md outline-none focus:border-green-400"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={ErrorDiv} />
    </div>
  );
};

export default TextArea;
