{
    var l = 1;
    {
      var l = 2;
      console.log(l); // 2
    }
    console.log(l); // 2
}
  
{
    let l = 1;
    {
      let l = 2;
      console.log(l); // 2
    }
    console.log(l); // 1
}