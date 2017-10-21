const TargetsApi = {
    learningObjectives : [ 
    {
      id : 1, 
      text: 'Write an introduction', 
      stepsToSuccess : ['Describe characters', 'Describe setting', 'Hook in the reader']
    },
      {
      id : 2, 
      text: 'Write a build up', 
      stepsToSuccess : ['Build tension', 'Describe the action', 'Write in the past']
    }
    ],
    all : function() { return this.learningObjectives },
    get : function(num) {
      const isLo = lO => lO.id === num;
      return this.learningObjectives.find(isLo);
    }
    
  }

  export default TargetsApi