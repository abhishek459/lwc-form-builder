import { LightningElement, track } from 'lwc';
import configFields from './fieldConfigurations';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];

    get configurationItems() {
        if (this.layoutIndex && this.fieldIndex) {
            const myArray = [];
            configFields.forEach(item => {
                item.value = this.layouts[this.layoutIndex].fields[this.fieldIndex][item.attribute];
                myArray.push(item);
            })
            return myArray;
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