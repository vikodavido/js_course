function generateName()
{
  // make sure to check the name is unique via the photoManager object
  function randomString(i) {
    var rnd = '';
    while (rnd.length < i) 
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
  };
  
  return randomString(6)

}