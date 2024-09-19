document.getElementById('userForm').addEventListener('submit', function(event) {  

    event.preventDefault();  


    const name = document.getElementById('name').value;  
    const age = document.getElementById('age').value;  
    const email = document.getElementById('email').value;  
    const hobbies = document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim());  
    
   
    const userDetails = {  
        name: name,  
        age: age,  
        email: email,  
        hobbies: hobbies  
    };  

  
    const jsonOutput = JSON.stringify(userDetails, null, 2); 

 
    document.getElementById('jsonOutput').textContent = jsonOutput;  
}); 