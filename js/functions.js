function boiDontGo() {

var noodle = [
    "spaghetti",
    "macaroni",
    "bowtie",
    "wheat",
    "vegetable",
    "spiral",
    "linguine",
    "ramen",
    "yakisoba",
    "thai",
    "elbow",
    "rigatoni",
    "farfalle",
]

var pastasDisplay = document.getElementsByClassName('pastas');
    pastasDisplay[0].innerHTML='<ul>'
    for(var i in noodle) {
        const testname=noodle[i]
        pastasDisplay[0].innerHTML+='<li>'+testname+'</li>'
    }
 pastasDisplay[0].innerHTML+='</ul>'
        

}
