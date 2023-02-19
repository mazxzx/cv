
async function load(){
    const response =  await fetch('https://randomuser.me/api/');
    const names =  await response.json();
  
    console.log(names); 

    document.getElementById('nombre').innerHTML = names.results[0].name.first + ' ' + names.results[0].name.last;
    document.getElementById('numero').innerHTML =names.results[0].phone + '|' + names.results[0].cell;
		
    document.getElementById('email').innerHTML = names.results[0].email;
    //document.getElementById('user_name1').innerHTML =  '@' + names.results[0].name.first + names.results[0].name.last + get_year(names);
    //document.getElementById('user_name2').innerHTML =  '@' + names.results[0].name.first + names.results[0].name.last + get_year(names);
    document.getElementById('foto_perfil').src = names.results[0].picture.large;
    document.getElementById('timezone').innerHTML = 'UTC ' + names.results[0].location.timezone.offset;
    document.getElementById('calle').innerHTML = names.results[0].location.street.name;
    document.getElementById('ciudad').innerHTML = names.results[0].location.city + ', ' + names.results[0].location.state + ', ' + names.results[0].location.country; 
    

  
          
  
         
    
  }
function get_year (user)
{
	let date = JSON.stringify(user.results[0].dob.date).split("");
	return date[3] + date[4];
}
  load(); 