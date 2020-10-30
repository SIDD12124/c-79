var Student=[];
function submit(){
    var name1=document.getElementById("Student_1").value;
    var name2=document.getElementById("Student_2").value;
    var name3=document.getElementById("Student_3").value;
    var name4=document.getElementById("Student_4").value;
    Student.push(name1);
    Student.push(name2);
    Student.push(name3);
    Student.push(name4);
    document.getElementById("Display").innerHTML=Student;
    document.getElementById("sb").style.display="none";
    document.getElementById("st").style.display="inline-block";
}

function sort(){
Student.sort();
document.getElementById("Display").innerHTML=Student;
}
