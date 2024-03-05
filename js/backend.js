$(function(){
  $('button').on('click',function(){
    "use strict";
//      alert('yes');
    var old = $('#oldTerm').val(),
        newt = $('#newTerm').val(),
        oldArray = $('#text').val().trim().split(" "),
        newArray = [];

         for(var i=0;i<oldArray.length;i++)
         {
           if(oldArray[i]==old)
           {
             oldArray[i]=newt;
           }
         }
         var newText = oldArray.join(" ");
         $('#text').val(newText);

//        var oldTermArray = old.split(''),
//            newTermArray = old.split(''),
//            oldTextArray = $('#text').val().trim().split(''),
//            newTestArray=[];
//          
//            for(var i=0;i<oldTextArray.length;i++)
//            {
//              var n = 0;
//              if(oldTextArray[i]==oldTermArray[0])
//              {
//                for(var j=0;j<oldTermArray.length;j++)
//                {
//                  if(oldTextArray[i+j]==oldTermArray[j])
//                  {
//                    n++;
//                  }
//                }
//              }
//              if(n == oldTermArray.length)
//              {
//                for(var j=0;j<oldTermArray.length;j++)
//                {
//                  // oldTextArray[i+j] = "a";
//                  // oldTextArray[i+j] = "a";
//                  oldTextArray=oldTextArray.splice(i+j,0,"a");
//                }
//              }
//            }
//        var newText = oldTextArray.join("");
//        $('#text').val('dsfsfs');
            
  })
});