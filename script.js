async function getJson(url) {
    
    return await fetch(new Request(url, { 
        method: 'GET'
      }))
      .then(response => response.json())
      .then(data => {
        
        {return data.results[0]}
      })
      .catch(e => console.error('error de fetch'));

  }
   
function getRandomCv()
{
    return getJson('https://randomuser.me/api/');
}
    
    
         
    


function get_year (user)
{
    const date = user.dob.date.split("");
    return date[3] + date[4];
}

async function fill_cv(user)
{
    //console.log(user);
    document.getElementById('thumbnail').src =user.picture.thumbnail;
    document.getElementById('foto_perfil').src = user.picture.large;

    document.getElementById('nombre').innerHTML = user.name.first + ' ' + user.name.last;
    document.getElementById('nombre_sobremi').innerHTML = user.name.first + ' ' + user.name.last;
    document.getElementById('numero').innerHTML =user.phone + '|' + user.cell
    document.getElementById('email').innerHTML = user.email;

    document.getElementById('timezone').innerHTML = 'UTC ' + user.location.timezone.offset;
    document.getElementById('calle').innerHTML = user.location.street.name;
    document.getElementById('ciudad').innerHTML = user.location.city + ', ' + user.location.state + ', ' + user.location.country; 

    
    document.getElementById('fb_username').innerHTML = '@' + user.name.first + user.name.last + user.name.last + get_year(user);
    document.getElementById('tw_username').innerHTML = '@' + user.name.first + user.name.last + user.name.last + get_year(user);
    document.getElementById('insta_username').innerHTML = '@' + user.name.first + user.name.last + user.name.last + get_year(user);

    document.getElementById('face_user').href = 'https://www.facebook.com/' + user.name.first + user.name.last + user.name.last + get_year(user);
    document.getElementById('tw_user').href = 'https://twitter.com/' + user.name.first + user.name.last + user.name.last + get_year(user);
    document.getElementById('insta_user').href =  'https://www.instagram.com/' + user.name.first + user.name.last + user.name.last + get_year(user);

  
}

getRandomCv().then
(user=>
    fill_cv(user)
); 



   