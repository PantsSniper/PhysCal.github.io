//HTML dynamic changes function list implemented in JavaScript
//Steven Gantz
//7/20/2014
//Maintained on GitHub
//Error check
//Dynamic Web page changes on Initial Position radio button selection
function userChoseInitialPosition() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center;background-color:yellow;">\
                    </form>';  
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Initial Position</h3>';
}

//Dynamic Web page changes on Final Position radio button selection
function userChoseFinalPosition() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Final Position</h3>';
}

//Dynamic Web page changes on Velocity radio button selection
function userChoseVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Velocity</h3>';
}

//Dynamic Web page changes on Time radio button selection
function userChoseTime() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    <select>\
                        <option value="v">v</option>\
                        <option value="a">a</option>\
                    </select>\
                    <input id="vora" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
                    //add <br/><br/> when either or is consolidated
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Time</h3>';
}

//Dynamic Web page changes on Acceleration radio button selection
function userChoseAcceleration() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
                    //add <br/><br/> when either or is consolidated
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    <select>\
                        <option value="t">t</option>\
                        <option value="d">d</option>\
                    </select>\
                    <input id="dort" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Acceleration</h3>';
}

//Dynamic Web page changes on Initial Velocity radio button selection
function userChoseInitialVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Initial Velocity</h3>';
}

//Dynamic Web page changes on FinalVelocity radio button selection
function userChoseFinalVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Final Velocity</h3>';
}

//Dynamic Web page changes on Distance radio button selection
function userChoseDistance() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
    document.getElementById("resultname").innerHTML = '<h3 id="resultname">Distance Travelled</h3>';
}
