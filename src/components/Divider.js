/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Apr 14 2022 12:13:32 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const Divider = ({ dashed = false }) => {
  return (
    <div className={`h-[1px] my-2 border ${dashed && "border-dashed"}`}></div>
  );
};

export default Divider;
