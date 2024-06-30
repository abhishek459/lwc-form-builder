const typeOptions = [{ label: 'Text', value: 'text' }];
const typeField = { label: 'Type', attribute: 'type', options: typeOptions };

const labelField = { label: 'Label', attribute: 'label', type: 'text', };

const variantOptions = [{ label: 'Standard', value: 'standard' }, { label: 'Label Hidden', value: 'label-hidden' }];
const variantField = { label: 'Variant', attribute: 'variant', options: variantOptions };

const configFields = [
    typeField,
    labelField,
    variantField,
];

export { configFields as default };