//complete - awaiting check from sam
function userChoseInitialPosition() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/>\
                    v: <input id="v" type="text"/><br/>\
                    t: <input id="t" type="text"/><br/>\
                    a: <input id="a" type="text"/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//complete - awaiting check from sam
function userChoseFinalPosition() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xf: <input id="xf" type="text"/><br/>\
                    v: <input id="v" type="text"/><br/>\
                    t: <input id="t" type="text"/><br/>\
                    a: <input id="a" type="text"/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//complete - awaiting check from sam
function userChoseVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/>\
                    t: <input id="t" type="text"/><br/>\
                    a: <input id="a" type="text"/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//partially complete - awaiting check from sam
function userChoseTime() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xi" type="text"/><br/><br/>\
                    xf: <input id="xf" type="text"/><br/> \
                    Either v: <input id="v" type="text"/><br/>\
                    Or a: <input id="a" type="text"/><br/>\
                    <input type="submit" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="submit" value="Calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//partially complete - awatiting check from sam
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

//complete
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

//complete
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

//complete
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
