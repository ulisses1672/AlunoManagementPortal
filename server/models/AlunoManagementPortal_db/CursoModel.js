import CursoModelGenerated from "./generated/CursoModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CursoModelGenerated.init();
  
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
      return await CursoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CursoModelGenerated,
  ...customModel
};
