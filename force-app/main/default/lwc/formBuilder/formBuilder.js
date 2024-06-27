import { LightningElement, track } from 'lwc';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];
    get configurationItems() {
        console.log(`Inside getter this.layoutIndex - ${this.layoutIndex}, this.fieldIndex - ${this.fieldIndex}`);
        if (this.layoutIndex && this.fieldIndex) {
            console.log('Returning list');
            return [
                { label: 'Type', isCombobox: true, options: [{ label: 'Text', value: 'text' }], value: this.layouts[this.layoutIndex].fields[this.fieldIndex].type },
                { label: 'Label', type: 'text', value: this.layouts[this.layoutIndex].fields[this.fieldIndex].label },
                { label: 'Variant', isCombobox: true, options: [{ label: 'Standard', value: 'standard' }, { label: 'Label Hidden', value: 'label-hidden' }] }
            ];
        } else return false;
    }

    layoutIndexAttribute = 'data-layout-index';
    fieldIndexAttribute = 'data-field-index';
    layoutIndex;
    fieldIndex;

    layoutClicked(event) {
        this.layoutIndex = event.target.getAttribute(this.layoutIndexAttribute);
        this.fieldIndex = event.target.getAttribute(this.fieldIndexAttribute);
        console.log(`this.layoutIndex - ${this.layoutIndex}, this.fieldIndex - ${this.fieldIndex}`);
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