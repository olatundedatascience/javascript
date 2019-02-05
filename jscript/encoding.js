 var dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" .split("");

 function encodeId(num) {
     var len = dictionary.length;
     var encoded ="";

     if(num === 0) {
         return dictionary[0];
     }
     while( num > 0) {
         encoded += dictionary[(num % len)];
         num = Math.floor(num / len);
     }

     return encoded;
 }

 function md5(str, len =16) {
     const probable ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+-_)([]{}@~#':;\"¬`!£$%6&8\\<>/?|";
     str = typeof(str) === 'string' ? str : "no match";
     var retValue ="";
     var positional ="";
     if(str === "no match") {
         retValue = "invalid";
     }
     else {
         
         for(var i=1;i<len;i++) {
            var probable1 = myOwnReserve(probable);
            retValue += probable1[Math.floor(getLength(str) % i)];
           positional += probable1.charAt(i);
         }
     }
     return positional;
 }
 function getLength(str) {
     return str.length;
 }
 /*
 function myOwnDecode(str) {
     var encoded ="";
     if(typeof(str) !== 'string') {
         return ;
     }
     else {
        var len = str.length;
        if(len  == 0) {
            return dictionary[len];
        }
        while( len > 0) {
            encoded += dictionary[(len % 3)];
            len = Math.floor(len / 3)
        }
     }
     return myOwnReserve(encoded);
 }
 */
 function reservedWord(str) {
     var rev ="";
     for(var i= str.length -1; i >=0; i--) {
         rev += str.charAt(i);
     }
     return rev;
 }
 function myOwnReserve(str) {
     var reserve ="";
     if(typeof(str) !== 'string') {
         return ;
     }
     else {
        for(var i=0;i<=str.length;i++) {
            if(i == 0) {
                continue;
            }
            else {
                reserve += str[str.length - i];
            }
            
        }
     }
     return reserve;
 }

 function generatedPassword(len=16, inludeNumbers = true, isAlpha = true, 
    includeSpecialChar = true, includeUpperCase = false) {
     var numbers = "0123456789";
     var specialChar = "/.,><#~'@[]{}()-_+=\\¬`!\"£$%^&*|";
     var alpah ="abcdefghijklmnopqrstuvwxyz";
     var afa = numbers.concat(alpah);
     var upperChase = alpah.toUpperCase();
     var finalString ="";
     var toChoseFrom ="";
     if(inludeNumbers && includeSpecialChar && includeUpperCase && isAlpha) {
        toChoseFrom = numbers.concat(specialChar).concat(afa).concat(upperChase);
     }
     else if(inludeNumbers & !(isAlpha|| includeSpecialChar || includeUpperCase)) {
         toChoseFrom += numbers + alpah;;
     }
    else if(isAlpha) {
        var ij = numbers + alpah;
        toChoseFrom += ij;
     }
     else {
         toChoseFrom = alpah;
     }
     toChoseFrom = myOwnReserve(toChoseFrom).split("");
     for(var i=0;i<toChoseFrom.length;i++) {
         finalString += toChoseFrom[i];
         
     }
     var lek = toChoseFrom.length;
     //toChoseFrom = toChoseFrom.split("");
     /*
     while(lek > 0) {
         var index = Math.floor(Math.random() * lek);
         var temp = toChoseFrom[lek];
         toChoseFrom[index] = toChoseFrom[index];
         toChoseFrom[index] = temp;
         //toChoseFrom
         lek--;
     }
     */
    for(var i=lek -1;i>=0;i--) {
        var index =Math.floor(Math.random() * lek);
        var itemIndex = toChoseFrom[index];
        toChoseFrom[index] = toChoseFrom[i];
        toChoseFrom[i] = itemIndex;
    }
    toChoseFrom = toChoseFrom.join("");
     
     return toChoseFrom.substring(0, len);;
 }
 var ki = generatedPassword(30, true, true, true, true);
 console.log(ki)