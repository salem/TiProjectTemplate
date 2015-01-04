/***
 * @author : Altaf Hussain
 * @date : 31 / 10 / 2013
 * @Description : Fetch image from othaim server asynchronously. Later i will add image cache feature if needed.
 *  
 */

var  GetImage = function(imageViewObject, url)
{
    var xhr = Ti.Network.createHTTPClient();
 
    xhr.onload = function() 
    {
       Ti.API.info('URL : ' + xhr.location);  
       imageViewObject.image = xhr.responseData;     
    };
    
    xhr.onerror = function(e)
    {
      Ti.API.info('URL : ' + xhr.location);  
    };
    
    xhr.open('GET', url);
    xhr.send();
};

module.exports = GetImage;
