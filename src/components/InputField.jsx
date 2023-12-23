import React from "react";

const InputField = (props) => {
  return (
    <label className="enterCelsius">
      Sıcaklığı Celcius olarak giriniz:
      <input value={props.itsvalue} onChange={props.onchange} />
    </label>
  );
};

export default InputField;
