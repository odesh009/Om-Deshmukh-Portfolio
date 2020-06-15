import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveContact from '@salesforce/apex/PortfolioContactControlller.saveContactRecord';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DESCRIBE_FIELD from '@salesforce/schema/Contact.Description';

export default class RecordFormCreateExample extends LightningElement {
    // objectApiName is "Account" when this component is placed on an account record page
    @track error;
    @track contactRecord = {
        FirstName: FIRSTNAME_FIELD,
        LastName: LASTNAME_FIELD,
        MobilePhone: MOBILE_FIELD,
        Email: EMAIL_FIELD,
        Description: ''
    };

    handleFirstNameChange(event) {
        this.contactRecord.FirstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.contactRecord.LastName = event.target.value;
    }

    handlePhoneChange(event) {
        this.contactRecord.MobilePhone = event.target.value;
    }

    handleEmailChange(event) {
        this.contactRecord.Email = event.target.value;
    }

    handleDescribeChange(event) {
        this.contactRecord.Description = event.target.value;
    }


    handleSave() {
        console.log('Save contact');
        saveContact({ objContact: this.contactRecord })
        .then(result => {
            // Clear the user enter values
            this.contactRecord = {};

            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                message: 'Thank you for contacting me! I will get back to you soon.',
                variant: 'success',
                mode: 'pester',
            }));
        })
        .catch(error => {
            console.log('Error :' + error.body.message);
            this.dispatchEvent(new ShowToastEvent({
                message: error.body.message,
                variant: 'error',
                mode: 'pester',
            }));
        });
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

    zoomLevel = 6;
    showFooter = false;
}
