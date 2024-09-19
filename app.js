document.getElementById('userForm').addEventListener('submit', function(event) {  

    event.preventDefault();  


    const name = document.getElementById('name').value;  
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;  
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;  
    const hobbies = document.getElementById('hobbies').value;
    
   
    const userDetails = {  
        name: name,  
        lastname: lastname,
        address: address,
        age: age,  
        email: email,  
        hobbies: hobbies  
    };  

  
    const jsonOutput = JSON.stringify(userDetails, null, 2); 

 
    document.getElementById('jsonOutput').textContent = jsonOutput;  
}); 
