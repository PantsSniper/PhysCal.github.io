
// xf where xf refers to Final Position
//Name: FinalPositionCalculation
//Parameters: \
// Initial Position, Velocity \
// Time, Acceleration
//Returns: Final Position
function FinalPositionCalculation(InitialPosition, Velocity, Time, Acceleration)
{
    
}

// xi where xi refers to Initial Position 
//Name: InitialPositionCalculation
//Parameters: \
// Final Position, Velocity \
// Time, Acceleration
//Returns: Initial Position
function InitialPositionCalculation(FinalPosition, Velocity, Time, Acceleration)
{

}

// v where v refers to Velocity
//Name: InitialPositionCalculation
//Parameters: \
// Initial Position, Final Position, \
// Time, Acceleration
//Returns: Initial Position
function VelocityCalculation(InitialPosition, FinalPosition, Time, Acceleration)
{

}


// t where t refers to Time
//Name: InitialPositionCalculation
//Parameters: \
// Initial Position, \
// Final Position, \
// Velocity
//Returns: Time with Velocity as an input
function Velocity_TimeCalculation(InitialPosition, FinalPosition, Velocity)
{

}

var t1 = function(xf,xi,v)
{
  (xf - xi)/v         //(a = 0)
}

var t2 = function(xi,xf,a)
{
  2*Math.sqrt(((xi - xf)/a))   //(v = 0)
}

var t3 = function(vf,vi,a)
{
  (vf - vi)/a      //only pertinent to finding changes in velocity
}


// a

a1 = function(xf,xi,v,t)
{
  (xf - xi - v*t)/((1/2)Math.pow(t,2))
}

a2 = function(vf,vi,t)
{
  (vf - vi)/t
}

a3 = function(vf,vi,d)
{
  (Math.pow(vf,2) - Math.pow(vi,2))/2d
}


// vi

vi1 = function(vf,a,t)
{
  vf - at
}

vi2 = function(vf,a,d)
{
  vi = Math.sqrt(Math.pow(vf,2) - 2ad)
}


// d (as in dick)

d = function(vf,vi,a)
{
  (Math.pow(vf,2) - Math.pow(vi,2))/2a
}
