import { LightningElement } from 'lwc';
import SVG_LOADER from '@salesforce/resourceUrl/pulsar';

export default class PortfolioPageLoaderCmp extends LightningElement {
    svgURL = `${SVG_LOADER}#pulsar`
}