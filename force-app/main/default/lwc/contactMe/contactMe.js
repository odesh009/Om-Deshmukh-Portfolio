import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DESCRIBE_FIELD from '@salesforce/schema/Contact.Description';

export default class RecordFormCreateExample extends LightningElement {
    // objectApiName is "Account" when this component is placed on an account record page
    @api objectApiName = 'Contact';

    fields = [NAME_FIELD, MOBILE_FIELD, EMAIL_FIELD, DESCRIBE_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({ 
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }

    mapMarkers = [
        {
            location: {
                Street: 'Monal Park',
                City: 'Pune',
                PostalCode: '411028',
                State: 'MH',
                Country: 'INDIA',
            },
            value: 'location001',
            title: 'Om Deshmukh',
            description: 'Monal Park, Gadital, Hadapsar, Pune. 411028', //escape the apostrophe in the string using &#39;
            icon: 'standard:account'
        },
    ];

    center = {
        location: {
            City: 'Pune',
        },
    };

    zoomLevel = 8;
    showFooter = false;
}
