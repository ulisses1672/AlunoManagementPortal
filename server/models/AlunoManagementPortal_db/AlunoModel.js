import AlunoModelGenerated from "./generated/AlunoModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AlunoModelGenerated.init();
  
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
      return await AlunoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AlunoModelGenerated,
  ...customModel
};
