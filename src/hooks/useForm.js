import { useState } from 'react';

/**
 * It returns an object with the current form state, a function to update the form state, and a
 * function to reset the form state
 * @param [initialForm] - The initial state of the form.
 * @returns {
 *   ...formState,
 *   formState,
 *   onInputChange,
 *   onResetForm,
 * }
 */
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
