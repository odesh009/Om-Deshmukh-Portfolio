({
    loadParticles: function (component, event, helper) {
        try {
            var jsonConfig = $A.get('$Resource.ParticlesConfig');
            particlesJS.load('particles-js', $A.get('$Resource.ParticlesConfig'), function () {
                console.log('');
            });
        } catch (e) {
            console.log(e.message);
        }
    }
})