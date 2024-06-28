import { LightningElement, track } from 'lwc';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];
    get configurationItems() {
        console.log(`Inside getter this.layoutIndex - ${this.layoutIndex}, this.fieldIndex - ${this.fieldIndex}`);
        if (this.layoutIndex && this.fieldIndex) {
            console.log('Returning list');
            return [
                { label: 'Type', attribute: 'type', options: [{ label: 'Text', value: 'text' }], value: this.layouts[this.layoutIndex].fields[this.fieldIndex].type },
                { label: 'Label', attribute: 'label', type: 'text', value: this.layouts[this.layoutIndex].fields[this.fieldIndex].label },
                { label: 'Variant', attribute: 'variant', options: [{ label: 'Standard', value: 'standard' }, { label: 'Label Hidden', value: 'label-hidden' }], value: this.layouts[this.layoutIndex].fields[this.fieldIndex].variant }
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

    configureInput(event) {
        const attribute = event.target.getAttribute('data-attribute');
        this.layouts[this.layoutIndex].fields[this.fieldIndex][attribute] = event.target.value;
    }
}