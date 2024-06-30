function kebabToPascalWithSpace(str) {
    const words = str.split("-");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}

function buildPicklistOptions(items) {
    if (Array.isArray(items) && items.length > 0) {
        const options = items.map(item => {
            return { label: kebabToPascalWithSpace(item), value: item };
        });
        return options;
    } else return undefined;
}

function getFieldConfiguration({ label, attribute, type = 'text', options }) {
    return {
        label,
        attribute,
        type,
        options
    };
}

const typeOptions = ['text', 'number', 'email', 'tel', 'url', 'date', 'time', 'datetime', 'datetime-local'];
const type = getFieldConfiguration({ label: 'Type', attribute: 'type', options: buildPicklistOptions(typeOptions) });

const label = getFieldConfiguration({ label: 'Label', attribute: 'label' });

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