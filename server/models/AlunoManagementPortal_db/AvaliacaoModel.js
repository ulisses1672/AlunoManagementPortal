import AvaliacaoModelGenerated from "./generated/AvaliacaoModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AvaliacaoModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AvaliacaoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AvaliacaoModelGenerated,
  ...customModel
};
