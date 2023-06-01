import { useState } from "react";

export const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return {
    formData,
    handleChange,
  };
};
