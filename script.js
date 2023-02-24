
async function load(){
    const response =  await fetch('https://randomuser.me/api/');
    const names =  await response.json();
  
 

    document.getElementById('thumbnail').src =names.results[0].picture.thumbnail;
    document.getElementById('foto_perfil').src = names.results[0].picture.large;

    document.getElementById('nombre').innerHTML = names.results[0].name.first + ' ' + names.results[0].name.last;

    document.getElementById('numero').innerHTML =names.results[0].phone + '|' + names.results[0].cell
    document.getElementById('email').innerHTML = names.results[0].email;

    document.getElementById('timezone').innerHTML = 'UTC ' + names.results[0].location.timezone.offset;
    document.getElementById('calle').innerHTML = names.results[0].location.street.name;
    document.getElementById('ciudad').innerHTML = names.results[0].location.city + ', ' + names.results[0].location.state + ', ' + names.results[0].location.country; 

    
    document.getElementById('fb_username').innerHTML = '@' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);
    document.getElementById('tw_username').innerHTML = '@' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);
    document.getElementById('insta_username').innerHTML = '@' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);

    document.getElementById('face_user').href = 'https://www.facebook.com/' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);
    document.getElementById('tw_user').href = 'https://twitter.com/' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);
    document.getElementById('insta_user').href =  'https://www.instagram.com/' + names.results[0].name.first + names.results[0].name.last + names.results[0].name.last + get_year(names);

  
         
    
  }
function get_year (user)
{
	let date = JSON.stringify(user.results[0].dob.date).split("");
	return date[3] + date[4];
}

function get_pattern()
{
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.className = 'fa-sharp fa-regular fa-grid-2';
  img.onload = function() {
    const pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
}
  load(); 