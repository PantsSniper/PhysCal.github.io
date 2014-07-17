function userChoseInitialPosition() {
    document.getElementById("mainForm").innerHTML = "Paragraph changedA.";
}

function userChoseFinalPosition() {
    document.getElementById("mainForm").innerHTML = "paragraph changed final position";
}

function userChoseVelocity() {
    var leftHTML = '<form id="leftForm" style="text-align:center">xi: <input id="xi" type="text"/><br/><br/>xf: <input id="xf" type="text"/><br/><br/>t: <input id="t" type="text"/><br/><br/>a: <input id="a" type="text"/><br/><br/><input type="submit" value="calculate"/></form>';
    var rightHTML = '';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

function userChoseTime() {
    document.getElementById("mainForm").innerHTML = "Paragraph changedD.";
}

function userChoseAcceleration() {
    document.getElementById("mainForm").innerHTML = "Paragraph changedE.";
}

function userChoseInitialVelocity() {
    document.getElementById("mainForm").innerHTML = "Paragraph changedF.";
}

function userChoseFinalVelocity() {
    var leftHTML = '<form id="leftForm" style="text-align:center">vi: <input id="vi" type="text"/><br/><br/>t: <input id="t" type="text"/><br/><br/>d: <input id="d" type="text"/><br/><br/><input type="submit" value="calculate"/></form>';
    var rightHTML= '<form id="leftForm" style="text-align:center">vi: <input id="vi" type="text"/><br/><br/>t: <input id="t" type="text"/><br/><br/>a: <input id="a" type="text"/><br/><br/><input type="submit" value="calculate"/></form>';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

function userChoseDistance() {
    document.getElementById("mainForm").innerHTML = "Paragraph changedH";
}
