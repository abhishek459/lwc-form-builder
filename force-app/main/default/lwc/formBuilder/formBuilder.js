import { LightningElement, track } from 'lwc';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];
    configurationItems = [
        { label: 'Type', isCombobox: true, options: [{ label: 'Text', value: 'text' }] },
        { label: 'Label', type: 'text' },
        { label: 'Variant', isCombobox: true, options: [{ label: 'Standard', value: 'standard' }, { label: 'Label Hidden', value: 'label-hidden' }] }
    ];

    layoutIndexAttribute = 'data-layout-index';
    fieldIndexAttribute = 'data-field-index';

    layoutClicked(event) {
        const layoutIndex = event.target.getAttribute(this.layoutIndexAttribute);
        const fieldIndex = event.target.getAttribute(this.fieldIndexAttribute);
        if (layoutIndex >= 0 && fieldIndex >= 0) {

        }
    }

    addField(event) {
        const layoutNumber = event.target.getAttribute(this.layoutIndexAttribute);
        const fields = this.layouts[layoutNumber].fields || [];
        fields.push({ label: 'New Label', type: 'text', variant: 'standard' });
        this.layouts[layoutNumber].fields = fields;
    }

    addLayout() {
        this.layouts.push({});
    }
}