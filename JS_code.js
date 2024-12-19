// Function for calculating grades 
const calculate = () => { 

    // Getting input from user into height variable. 
    let telugu = document.querySelector("#telugu").value; 
    let hindi = document.querySelector("#hindi").value; 
    let english=document.querySelector("#english").value;
    let maths = document.querySelector("#maths").value; 
    let science = document.querySelector("#science").value; 
    let social = document.querySelector("#social").value;
    let grades = ""; 
    
    // Input is string so typecasting is necessary. */ 
    if( telugu < 40 || hindi < 40 || english < 40 || maths < 40 || science < 40 || social < 40){
        document.querySelector("#showdata").innerHTML
        = `You have one more chance to get success score more than 40 in every subject`;
    }
    else
    {
    let totalgrades = 
        parseFloat(telugu) + 
        parseFloat(hindi) + 
        parseFloat(english)+
        parseFloat(maths) + 
        parseFloat(science)+
        parseFloat(social); 
    
    // Checking the condition for the providing the 
    // grade to student based on percentage 
    let percentage =parseInt((totalgrades / 600) * 100); 
    if (percentage <= 100 && percentage >= 80) { 
        grades = "Excellent"; 
    } else if (percentage <= 79 && percentage >= 60) { 
        grades = "Very good"; 
    } else if (percentage <= 59 && percentage >= 40) { 
        grades = "Good"; 
    } else { 
        grades = " one more chance "; 
    } 
    // Checking the values are empty if empty than 
    // show please fill them 
    if (telugu == "" || hindi == "" || english == "" || maths == "" || science == "" || social == "") { 
        document.querySelector("#showdata").innerHTML 
            = "Please enter all the fields"; 
    } 
    else { 
    
        // Checking the condition for the fail and pass
        
        if (percentage >= 39.5) { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 600 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            You are ${grades}. You got the success. `; 
        } else { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 600 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            You have ${grades} to get success `; 
        } 
    } 
    }
};
    
