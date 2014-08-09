//HTML dynamic changes function list implemented in JavaScript
//Steven Gantz
//Maintained on GitHub
//Dynamic Web page changes on Initial Position radio button selection
function userChoseInitialPosition() {
    var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xf: <input id="xi" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="button" \
                    onclick="InitialPositionCalculation(\
                    document.getElementById(&quot;xi&quot;).value,\
                    document.getElementById(&quot;v&quot;).value,\
                    document.getElementById(&quot;t&quot;).value,\
                    document.getElementById(&quot;a&quot;).value);"\
                    value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center;background-color:yellow;">\
                    </form>';  
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Final Position radio button selection
function userChoseFinalPosition() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    xi: <input id="xf" type="text"/><br/><br/>\
                    v: <input id="v" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <input type="button" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
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
                    <input type="button" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
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
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
                    
                    //add <br/><br/> when either or is consolidated
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
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
                    <input type="button" value="Calculate"/></form>';
                    
                    //add <br/><br/> when either or is consolidated
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    <select>\
                        <option value="t">t</option>\
                        <option value="d">d</option>\
                    </select>\
                    <input id="dort" type="text"/>\
                    <br/><br/><br/><br/>\
                    <input type="button" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Initial Velocity radio button selection
function userChoseInitialVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on FinalVelocity radio button selection
function userChoseFinalVelocity() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    vi: <input id="vf" type="text"/><br/><br/>\
                    t: <input id="t" type="text"/><br/><br/>\
                    d: <input id="d" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
    document.getElementById("leftBlock").style.width = '50%';
    document.getElementById("rightBlock").style.width = '50%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}

//Dynamic Web page changes on Distance radio button selection
function userChoseDistance() {
     var leftHTML = '<form id="leftForm" style="text-align:center">\
                    vi: <input id="vi" type="text"/><br/><br/>\
                    vf: <input id="vf" type="text"/><br/><br/>\
                    a: <input id="a" type="text"/><br/><br/>\
                    <br/><br/>\
                    <input type="button" value="Calculate"/></form>';
                    
    var rightHTML= '<form id="rightForm" style="text-align:center">\
                    </form>';
    document.getElementById("leftBlock").style.width = '100%';
    document.getElementById("rightBlock").style.width = '0%';
    document.getElementById("leftForm").innerHTML = leftHTML;
    document.getElementById("rightForm").innerHTML = rightHTML;
}


//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-------HTML Form Ends, Below are Functions for Calculating-------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------



// xf where xf refers to Final Position
//Name: FinalPositionCalculation
//Parameters: \
// Initial Position, Velocity \
// Time, Acceleration
//Returns: Final Position
function FinalPositionCalculation(InitialPosition, Velocity, Time, Acceleration)
{
    // xf = xi + vt +(1/2)at^2 || xf = xi + (v*t) + ( (1/2) * a * t^2 )
    var FinalPosition = InitialPosition + (Velocity * Time) + ( (1/2) * Acceleration * Math.pow(Time, 2) );
    return FinalPosition;
}

// xi where xi refers to Initial Position 
//Name: InitialPositionCalculation
//Parameters: \
// Final Position, Velocity \
// Time, Acceleration
//Returns: Initial Position
function InitialPositionCalculation(FinalPosition, Velocity, Time, Acceleration)
{
    //xi = xf - v*t - (1/2)a*t^2 || xi = xf - (v*t) - ( (1/2) * a * t^2 )
    var InitialPosition = FinalPosition - (Velocity * Time) - ( (1/2) * Acceleration * Math.pow(Time, 2) );
    document.getElementById("result").value = InitialPosition;
    //return InitialPosition;
}
/*
// v where v refers to Velocity
//Name: VelocityCalculation
//Parameters: \
// Initial Position, Final Position, \
// Time, Acceleration
//Returns: Velocity
function VelocityCalculation(InitialPosition, FinalPosition, Time, Acceleration)
{
    //v = (xf - xi - (1/2)a*t^2)/t || v = (xf - xi - ( ((1/2) * a * t^2 ) / t)
    var Velocity = FinalPosition - Initial Position - ( ( (1/2) * Acceleration * Math.pow(Time, 2) ) / Time );
    return Velocity;
}


// t where t refers to Time
//Name: VPosition_TimeCalculation
//Parameters: \
// Initial Position, \
// Final Position, \
// Velocity
//Returns: Time with Velocity as an input
function VPosition_TimeCalculation(InitialPosition, FinalPosition, Velocity)
{

}

// t where t refers to Time
//Name: Acceleration_TimeCalculation
//Parameters: \
// Initial Position, \
// Final Position, \
// Acceleration
//Returns: Time with Acceleration as an input
function APosition_TimeCalculation(InitialPosition, FinalPosition, Acceleration)
{

}

// t where t refers to Time
//Name: Velocity_TimeCalculation
//Parameters: \
// Initial Velocity, \
// Final Velocity, \
// Acceleration
//Returns: Time using Velocity
function Velocity_TimeCalculation(InitialVelocity, FinalVelocity, Acceleration)
{

}

// a where a refers to Acceleration
//Name: AccelerationPositionCalculation
//Parameters: \
// Initial Position, \
// Final Position, \
// Velocity, Time
//Returns: Acceleration using Position
function AccelerationPositionCalculation(InitialPosition, FinalPosition, Velocity, Time)
{

}

// a where a refers to Acceleration
//Name: TAccelerationVelocityCalculation
//Parameters: \
// InitialVelocity, \
// FinalVelocity, \
// Time
//Returns: Acceleration using Velocity and Time
function TAccelerationVelocityCalculation(InitialVelocity, FinalVelocity, Time)
{

}

// a where a refers to Acceleration
//Name: DAccelerationVelocityCalculation
//Parameters: \
// InitialVelocity, \
// FinalVelocity, \
// Distance
//Returns: Acceleration using Velocity and Distance
function DAccelerationVelocityCalculation(InitialVelocity, FinalVelocity, Distance)
{

}

// vi where vi refers to Initial Velocity
//Name: AInitialVelocityCalculation
//Parameters: \
// FinalVelocity, \
// Time, Acceleration
//Returns: Initial Velocity using Acceleration
function AInitialVelocityCalculation(FinalVelocity, Time, Acceleration)
{

}

// vi where vi refers to Initial Velocity
//Name: DInitialVelocityCalculation
//Parameters: \
// FinalVelocity, \
// Time, Distance
//Returns: Initial Velocity using Distance
function DInitialVelocityCalculation(FinalVelocity, Time, Distance)
{

}

// vf where vf refers to Final Velocity
//Name: AFinalVelocityCalculation
//Parameters: \
// InitialVelocity, \
// Time, Acceleration
//Returns: Final Velocity using Acceleration
function AFinalVelocityCalculation(FinalVelocity, Time, Acceleration)
{

}

// vf where vf refers to Final Velocity
//Name: DFinalVelocityCalculation
//Parameters: \
// InitialVelocity, \
// Time, Distance
//Returns: Final Velocity using Distance
function DFinalVelocityCalculation(InitialVelocity, Time, Distance)
{

}

// d where d refers to Distance
//Name: DistanceCalculation
//Parameters: \
// InitialPosition, \
// FinalPosition, \
// Acceleration
//Returns: Distance
function DistanceCalculation(InitialPosition, FinalPosition, Acceleration)
{

}

*/