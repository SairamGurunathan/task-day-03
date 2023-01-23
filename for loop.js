let biodata = {
    "firstName" : "Sairam",
    "secondName": "Gurunathan",
    "DOB"  : "11-July-1993",
    "Email": "sairam.gurunathan@gmail.com",
    "language":["english","tamil"],
    "gender" : "male",
    "UG" : "B.E",
    "department" : "Electronic and Communication",
    "Grade": "5.9",
    "experience" : "4.5 yrs",
    "degnation" : "Drive Test Engineer",
    "company1" : "Karthick Enterprices",
    "company2" : "Nemhans Solutions",
    "company3" : "Telecom Network Solution"
}

for(var i in biodata){
    console.log(i,biodata[i]);
}
