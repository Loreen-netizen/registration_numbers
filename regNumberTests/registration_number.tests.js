describe ("registrationNumberFactoryFunction",function(){

    // it("should create a new list item when add button is clicked", function(){
        
    //  var registrationNumberFactoryFunction2 = registrationNumberFactoryFunction();
    //  assert.equal(<li></li>,registrationNumberFactoryFunction2.createNewListItem("click"));
    
    // });
    it("should display registration Number", function(){
        var registrationNumberFactoryFunction1 = registrationNumberFactoryFunction()
         assert.equal("CA 123-123",registrationNumberFactoryFunction1.displayRegNumber("CA 123-123"));
        
        });
    
        it("should return Correct Town for reg Number ", function(){
            var registrationNumberFactoryFunction2 = registrationNumberFactoryFunction()
             assert.equal("Cape Town",registrationNumberFactoryFunction2.townSelected("CA"));
             assert.equal("Paarl",registrationNumberFactoryFunction2.townSelected("CJ"));
             assert.equal("Stellenbosch",registrationNumberFactoryFunction2.townSelected("CL"));
             assert.equal("Please Select Town",registrationNumberFactoryFunction2.townSelected(""));
            });

});