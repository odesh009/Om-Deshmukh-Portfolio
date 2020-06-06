import { LightningElement, track } from "lwc";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ParticlesJS from "@salesforce/resourceUrl/ParticlesJS";
import ParticlesConfig from "@salesforce/resourceUrl/ParticlesConfig";

export default class PorfolioHomePage extends LightningElement {
    @track error;
    @track successMessage = "";

    loadParticles(shadowRoot) {
        var jsonConfig = ParticlesConfig.substring(10, ParticlesConfig.length) +'/particles.json';
       particlesJS.load('particles-js', ParticlesConfig, shadowRoot ,function () {
            console.log('callback - particles.js config loaded');
        });
    }

    renderedCallback() {
        Promise.all([
            loadScript(this, ParticlesJS + "/particles.js-master/particles.js"), // chart js file
        ])
            .then(() => {
                this.loadParticles(this.template);
                this.error = undefined;
                // Call back function if scripts loaded successfully
                
            })
            .catch((error) => {
                console.log("renderedCallback Error " + error.message);
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Error!!",
                        message: error.message,
                        variant: "error"
                    })
                );
            });
    }

    showSuccessMessage() {
        // call back method
        this.successMessage = "Scripts are loaded successfully!!";
        console.log("Scripts are loaded successfully!!!");
    }
}