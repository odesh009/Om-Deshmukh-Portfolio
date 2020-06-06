({
    onClick: function (component, event, helper) {
        console.log('button clicked ' + JSON.stringify(event.target.dataset));
        var id = event.target.dataset.menuItemId;
        console.log('selected id '+id);
        if (id) {
            component.getSuper().navigate(id);
        }

        var isMenuVisible = component.get('v.isMobileMenuVisible');
        var mobileMenuCmp = component.find('mobileMenu');
        if (isMenuVisible == 'true') {
            $A.util.removeClass(mobileMenuCmp, 'show-cmponent');
            component.set('v.isMobileMenuVisible', 'false');
        }
    },

    mobileMenu: function (component, event, helper){
        var isMenuVisible = component.get('v.isMobileMenuVisible');
        var mobileMenuCmp = component.find('mobileMenu');
        if (isMenuVisible == 'true'){
            $A.util.removeClass(mobileMenuCmp, 'show-cmponent');
            component.set('v.isMobileMenuVisible', 'false');
        }else{
            $A.util.addClass(mobileMenuCmp, 'show-cmponent');
            component.set('v.isMobileMenuVisible', 'true');
        }
    }
})