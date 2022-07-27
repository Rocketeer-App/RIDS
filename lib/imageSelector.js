exports.createImageSelector = function(expectedFileType, openButtonId)
{
    $(`#${openButtonId}`).click(function(){
       var input =  document.createElement('input');
       input.id = 'file-input'
       input.type = 'file'
       input.name = "name"
       input.style.display = "none"
       input.accept = expectedFileType
       $(`#file-input`).trigger('click')
    })
}