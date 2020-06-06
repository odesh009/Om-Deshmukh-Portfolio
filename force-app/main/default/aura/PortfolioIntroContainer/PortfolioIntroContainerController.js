({
    handleTypedJS : function(component, event, helper) {
        var typed = new Typed('#typed', {
            strings: [
                'Salesforce Developer',
                '6x Salesforce Certified',
                'Copado Certified Admin',
                'Blockchain Enthusiast',
                'Full Stack Developer',
            ],
            backSpeed: 30,
            typeSpeed: 80,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    },

    loadParticles: function (component, event, helper) {
        helper.loadParticles(component, event, helper);
    },
})