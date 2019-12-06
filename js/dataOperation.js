function dataStore()
{
    var user = document.getElementById("userName").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    
    if (typeof(Storage) !== "undefined") {
        //store data on session storage
        sessionStorage.setItem('name',user);
        sessionStorage.setItem('address',address);
        sessionStorage.setItem('phoneNumber',phoneNumber);
        sessionStorage.setItem('email',email);
        //store data on local storage
        localStorage.setItem('name', user);
        localStorage.setItem('address',address);
        localStorage.setItem('phoneNumber',phoneNumber);
        localStorage.setItem('email',email);
        alert("Succefully added "+user);
      } else {
        alert('session storage not supported');
      }

}

function doShowAll() {
    
        var key = "";
        var list = "<tr><td>Key</th><td>Value</td></tr>\n";
        var i = 0,j;
        //show users
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            j=i+1;
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        
        if (list == "<tr><th>Serial no</th><th>Name</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //bind data with html page
        document.getElementById('list').innerHTML = list;
    
    }

