let name = "Alexander";
let number = 32;

//document.write("Hello World!");
//document.write(name);
//document.write(number);


function write(name, text){
    document.write("<b> " + name + "</b> wrote: " + text + "<br>");
}

write("Pierre", "Hej");
write(name, "Hej hej");

function sub(tal1, tal2){
    return tal1 - tal2;
}

write("Peter", "10 - 3 = " + sub(10, 3));
