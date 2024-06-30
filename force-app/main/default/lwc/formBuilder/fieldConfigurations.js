// this function is used to fetch key using value in a map
function buildReverseMap(object = {}) {
    if (typeof (object) !== 'object' || object == {}) return undefined;
    const reverseMap = {};
    Object.keys(object).forEach(key => {
        reverseMap[key] = object[key];
        reverseMap[String(object[key])] = key;
    });
    return reverseMap;
}

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

function getFieldConfiguration({ label, attribute, type = 'text', options, optionsTranslation }) {
    return {
        label,
        attribute,
        type,
        options,
        optionsTranslation
    };
}

const typeOptions = ['text', 'number', 'email', 'tel', 'url', 'date', 'time', 'datetime', 'datetime-local'];
const type = getFieldConfiguration({ label: 'Type', attribute: 'type', options: buildPicklistOptions(typeOptions) });

const label = getFieldConfiguration({ label: 'Label', attribute: 'label' });

const requiredOptionTranslation = { yes: true, no: undefined };
const requiredOptions = ['yes', 'no'];
const required = { label: 'Required', attribute: 'required', type: 'text', options: buildPicklistOptions(requiredOptions), optionsTranslation: buildReverseMap(requiredOptionTranslation) };

const variantOptions = ['standard', 'label-hidden', 'label-inline', 'label-stacked'];
const variant = getFieldConfiguration({ label: 'Variant', attribute: 'variant', options: buildPicklistOptions(variantOptions) });

const configFields = [
    label,
    required,
    type,
    variant,
];

export { configFields as default };