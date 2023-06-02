import { useState } from "react";

interface InitialData {
  [arg: string]: string;
}

export const useForm = (initialData: InitialData) => {
  const [formData, setFormData] = useState(initialData);

  function handleChange({
    target,
  }: {
    target: { name: string; value: string };
  }) {
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
