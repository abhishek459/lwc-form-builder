import { LightningElement, track } from 'lwc';

export default class FormBuilder extends LightningElement {
    @track layouts = [{}];

    layoutClicked(event) {
        console.log('Layout Index : ', event.target.getAttribute('data-layout-index'));
        console.log('Field Index : ', event.target.getAttribute('data-field-index'));
    }

    addField(event) {
        const layoutNumber = event.target.getAttribute('data-layout-index');
        const fields = this.layouts[layoutNumber].fields || [];
        fields.push({});
        this.layouts[layoutNumber].fields = fields;
    }

    addLayout() {
        this.layouts.push({});
    }
}