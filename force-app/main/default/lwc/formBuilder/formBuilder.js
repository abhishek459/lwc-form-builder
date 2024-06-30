import { LightningElement, track } from 'lwc';
import configFields from './fieldConfigurations';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];

    layoutClicked = false;
    fieldClicked = false;

    fieldConfigurationItems = [];

    layoutIndexAttribute = 'data-layout-index';
    fieldIndexAttribute = 'data-field-index';

    selectedLayoutIndex;
    selectedFieldIndex;

    activateConfigurationPanel(event) {
        this.selectedLayoutIndex = event.target.getAttribute(this.layoutIndexAttribute);
        this.selectedFieldIndex = event.target.getAttribute(this.fieldIndexAttribute);
        if (this.selectedLayoutIndex && !this.selectedFieldIndex) {
            this.layoutClicked = true;
            this.fieldClicked = false;
        } else if (this.selectedLayoutIndex && this.selectedFieldIndex) {
            this.setFieldConfigurationItemValues();
            this.layoutClicked = false;
            this.fieldClicked = true;
        } else {
            this.layoutClicked = false;
            this.fieldClicked = false;
        }
    }

    setFieldConfigurationItemValues() {
        this.fieldConfigurationItems = [];
        const field = this.layouts[this.selectedLayoutIndex].fields[this.selectedFieldIndex];
        configFields.forEach(item => {
            item.value = item.optionsTranslation ? item.optionsTranslation[field[item.attribute]] : field[item.attribute];
            this.fieldConfigurationItems.push(item);
        });
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
        const configFieldIndex = event.target.getAttribute('data-attribute-index');
        const field = this.layouts[this.selectedLayoutIndex].fields[this.selectedFieldIndex];
        const optionTranslation = configFields[configFieldIndex].optionsTranslation;
        field[attribute] = optionTranslation ? optionTranslation[event.target.value] : event.target.value;
    }
}