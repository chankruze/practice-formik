/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Apr 14 2022 15:12:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const Label = ({ htmlFor, value }) => {
  return (
    <label htmlFor={htmlFor} className="text-lg font-medium">
      {value}
    </label>
  );
};

export default Label;
