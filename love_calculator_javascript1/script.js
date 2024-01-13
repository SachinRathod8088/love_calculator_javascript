function calculatelove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    // console.log(name1)

    if(name1==="" || name2===""){
        alert("pelase enter both names.");
    }
    else{
        const lovepercentage=Math.floor(Math.random()*101);
        const result=document.getElementById("result");

        result.innerHTML=`${name1} and ${name2} 's Love percentage :${lovepercentage}`;

        if (lovepercentage <30){
            result.innerhtml +="<br> Not a great match. keep looking!"
        }
        else if (lovepercentage >=30 && lovepercentage <70){
            result.innerHTML+="<br> there is potential.give it a atry"
        }
        else{
            result.innerHTML+="<br> great match! love is in the Air"
        }
        }

}