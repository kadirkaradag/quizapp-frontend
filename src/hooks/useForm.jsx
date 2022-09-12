import { useState } from "react";

const useForm = (getFreshModelObj) => {
  const [values, setValues] = useState(getFreshModelObj());
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
};

export default useForm;
