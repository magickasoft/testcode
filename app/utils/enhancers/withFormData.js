import { compose, withHandlers, withState } from 'recompose';

function validateField(value, rules) {
  for (const rule in rules) { // eslint-disable-line
    const isRulePassed = rules[rule][0](value);

    if (!isRulePassed) {
      return rules[rule][1];
    }
  }

  return null;
}

function validateFormData(formData, rules) {
  let fieldError;
  const errors = {};

  for (const name of Object.keys(formData)) { // eslint-disable-line
    fieldError = validateField(formData[name], rules[name]);
    if (fieldError) {
      errors[name] = fieldError;
    }
  }

  return errors;
}


const withFormData = initialState =>
  withState('formData', 'setFormData', initialState);

const withFormHandlers = ({
  rules = {},
  onSuccess = () => { },
  onFail = () => { },
} = {}) => compose(
  withState('formErrors', 'setFormErrors', {}),
  withHandlers({
    updateFormData: ({ setFormData, formData }) => field => {
      setFormData(Object.assign({}, formData, { [field.name]: field.value }));
    },
    validateForm: ({ formData, setFormErrors }) => () => {
      setFormErrors(validateFormData(formData, rules));
    },
    sendForm: props => event => {
      const { formData, setFormErrors } = props;
      const errors = validateFormData(formData, rules);

      setFormErrors(errors);

      if (Object.keys(errors).length !== 0) {
        return onFail(props, event);
      }

      return onSuccess(props, event);
    },
  }));


export { withFormData, withFormHandlers };
