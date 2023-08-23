//callback function
function alertName(text){
    alert(text);
  }
  
  //callback function
  function consoleName(text){
    console.log(text);
  }
  
  //core function
  function coreFunction(name, callback){
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizedName);
  }
  
  //function execution
  coreFunction("aURIMAS", consoleName);