/* Napravljeno za kampanju Kolačićima protiv gladi
 * Autor: Tomislav Lukinić
 * 06.03.2015.
 */

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function saveIt(name) {
    createCookie(name,'2:',7)
}

function readIt(name) {
    x = readCookie(name);
    return x;
}

function eraseIt(name) {
    createCookie(name,"",-1);
}
// -->

function cookieExists(name){
    if(readIt(name)){
        return true;
    } else {
        return false;
    }
}

var COOKIELIB = COOKIELIB || (function(){
        var _args = {}; // private

        return {
            init : function(Args) {
                _args = Args;
                // some other initialising
            },
            manageCookies : function() {
                name = _args[0];
                divID = "#" + _args[1];
                $("<center><a href='https://www.indiegogo.com/projects/no-child-left-hungry-no-person-left-powerless' target='_blank'><img src='http://anony.ws/i/2015/03/07/cookiebanner-hr.png'>" +
                "<div>Kliknite ovdje i možete im pomoći #danebudugladni</div></a></center>").prependTo($(divID));

                if(cookieExists(name) && !(cookieExists("danebudugladni"))) {
                    eraseIt(name);
                    createCookie("danebudugladni", "1", 10);
                    window.location.reload();
                }
            }
        };
    }());

$(function() {
    cookiename = document.getElementById('cookie-name').value;
    divID = document.getElementById('div-id').value;
    COOKIELIB.init([cookiename, divID]);
    COOKIELIB.manageCookies();
});