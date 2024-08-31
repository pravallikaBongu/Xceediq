// Declare variables for the following and assign appropriate values:
//    - Your name
//    - Your age
//    - Your city
//    - A boolean value indicating whether you are a student
//    - A null value.
//    - An undefined value
var name="Pravallika";
var age=21;
var city="Visakhapatnam";
var isstudent=true;
var val=null;
var undefinedval;

document.writeln("My name is "+name+" I am "+age+"years old");
document.writeln("I am living in"+city+"<br>");
document.writeln("Pravallika is a student"+isstudent+"<br>");
document.writeln("Null value is"+val+"<br>"+"undefined variable:"+undefinedval+"<br>");

// Create a variable pi and assign it the value of pi (3.14159).
let pi;
pi=3.14159;
document.writeln("pi value:"+pi+"<br>");

// Create a variable greeting and assign it a string that says "Hello, world!"
var greeting;
greeting="Hello, world!";
document.writeln(greeting+"<br>");

// Create a variable isSunny and assign it a boolean value indicating whether it's sunny outside.
var isSunny;
isSunny=false;
document.writeln("Is it Sunny?"+isSunny+"<br>");

//Create a variable favoriteNumber and assign it your favorite number.
var favoriteNumber=3;
document.writeln("fav number is "+favoriteNumber+"<br>");

// Data types
//Print the data type of each variable you created in the previous section using the typeof operator.
document.write("type of variables"+"<br>");
document.writeln("name type:"+typeof(name)+"<br>");
document.writeln("age type:"+typeof(age)+"<br>");
document.writeln("city type:"+typeof(city)+"<br>");
document.writeln("isstudent type:"+typeof(isstudent)+"<br>");
document.writeln("val type:"+typeof(val)+"<br>");
document.writeln("undefinedval type:"+typeof(undefinedval)+"<br>");
document.writeln("pi type:"+typeof(pi)+"<br>");
document.writeln("greeting type:"+typeof(greeting)+"<br>");
document.writeln("isSunny type:"+typeof(isSunny)+"<br>");
document.writeln("favoriteNumber type:"+typeof(favoriteNumber)+"<br>");

// Create a variable mixedValue and assign it a value of your choice that includes multiple data types (e.g., a string, a number, and a boolean).
// 3. Print the data type of mixedValue.
var mixedValue="Its pouring"+3+true;
document.writeln(mixedValue+"<br>");

document.writeln("mixedValue type:"+typeof(mixedVlaue)+"<br>");

//Operators
// 1.Arithematic operators
var a=12;
var b=10;
document.write("Arithematic operators"+"<br>");
document.writeln("Addition"+a+b+"<br>");
document.writeln("Subtraction"+a-b+"<br>");
document.writeln("Multiplication"+a*b+"<br>");
document.writeln("Division"+a/b+"<br>");
document.writeln("Modulus"+a%b+"<br>");
document.writeln("Exponentiation"+a**b+"<br>");
//2.comparison operators
document.write("comparison operators"+"<br>");
document.write("Equal to (==)"+(a==b)+"<br>");
document.write("Not equal to (!=)"+(a!=b)+"<br>");
document.write("Greater than (>)"+(a>b)+"<br>");
document.write("Less than (<)"+(a<b)+"<br>");
document.write("Greater than or equal to (>=)"+(a>=b)+"<br>");
document.write("Less than or equal to (<=)"+(a<=b)+"<br>");

//logical operators
document.write("logical operators"+"<br>");
var t=true;
var f=false;
document.write("And &&"+(t && f)+"<br>");
document.write("Or ||"+(t||f)+"<br>");
document.write("Not !"+(!t)+"<br>");

//ternary operator
//Use the ternary operator to conditionally assign a value to a variable.
age=17;
var eligibility=age>=18?"You are eligible to Vote":"Sorry You are not eligible to Vote.";
document.write(eligibility+"<br>");

//Additional tasks
//1.Create a variable temperature and assign it a temperature value in Fahrenheit.
//2. Convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
//3. Print the converted temperature.
var temp=145;

var celsius=(temp - 32) * 5/9;
document.write("temp in clesius is "+celsius+"<br>");

//Create a variable age and assign it a value.
// 5. Determine whether the person is a minor, an adult, or a senior citizen based on the age.
// 6. Print the appropriate message.
age=56;
if(age<18)
    document.write("You are a minor"+"<br>");
else if(age>=18 && age<65)
    document.write("you are an adult "+"<br>");
else
document.write("you are a senior citizen"+"<br>");