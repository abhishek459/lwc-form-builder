const typeOptions = [{ label: 'Text', value: 'text' }];
const type = { label: 'Type', attribute: 'type', options: typeOptions };

const label = { label: 'Label', attribute: 'label', type: 'text', };

const requiredOptionTranslation = { yes: true, no: undefined };
const requiredOptions = [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }];
const required = { label: 'Required', attribute: 'required', type: 'text', options: requiredOptions, optionsTranslatedValue: requiredOptionTranslation };

const variantOptions = [{ label: 'Standard', value: 'standard' }, { label: 'Label Hidden', value: 'label-hidden' }];
const variant = { label: 'Variant', attribute: 'variant', options: variantOptions };

const configFields = [
    label,
    required,
    type,
    variant,
];

export { configFields as default };