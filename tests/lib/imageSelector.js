function createImageSelector(openButtonId)
{

       let button = document.getElementById(openButtonId);    
       button.style.cursor = "pointer";
       var input =  document.createElement('input');
       input.id = 'file-input'
       input.type = 'file'
       input.name = "name"
       input.style.display = "none"

       document.body.appendChild(input);
    }
