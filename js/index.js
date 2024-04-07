const labelBtn = document.querySelector("#flexSwitchCheckChecked");

labelBtn.addEventListener("change", function(){
    var element = document.body
    element.toggle.classList("dark-mode")
})