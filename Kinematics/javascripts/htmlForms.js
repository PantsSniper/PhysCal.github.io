//HTML dynamic changes function list implemented in JavaScript
//Steven Gantz
//7/20/2014
//Maintained on GitHub

//Global variables, removes style properties from divs specified
var removeStyleLeft = '<div id="leftBlock" style="">';
var removeStyleRight = '<div id="rightBlock" style="">';
//Adds multi-box styles
var addStyleLeft = '<div id="leftBlock" style="height:230px;width:50%;float:right;">';
var addStyleRight = '<div id="rightBlock" style="height:230px;width:50%;float:right;">';

//Dynamic Web page changes on Initial Position radio button selection
function userChoseInitialPosition() {
    var HTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';       
    document.getElementById("leftForm").innerHTML = HTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Final Position radio button selection
function userChoseFinalPosition() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Velocity radio button selection
function userChoseVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Time radio button selection
function userChoseTime() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    Either v: <input id="v" type="text"/><br/><br/>\
                    Or a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Acceleration radio button selection
function userChoseAcceleration() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    Either t: <input id="t" type="text"/><br/><br/>\
                    Or d: <input id="d" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Initial Velocity radio button selection
function userChoseInitialVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on FinalVelocity radio button selection
function userChoseFinalVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Distance radio button selection
function userChoseDistance() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}
