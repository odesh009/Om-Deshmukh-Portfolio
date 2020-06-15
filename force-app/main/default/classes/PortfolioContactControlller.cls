public without sharing class PortfolioContactControlller {
    @AuraEnabled
    public static void saveContactRecord(Contact objContact){
        try{
            insert objContact;
        }
        catch(Exception ex) {
            System.debug('Error '+ex.getMessage());
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
