(function() {
    var __UNSAFE_GLOBAL_LIBRARY_CLASS_TEXT = "text-black"
    var date = new Date().toISOString();
    function renderTime(node) {
        if (node){
            if (!node.classList.contains(__UNSAFE_GLOBAL_LIBRARY_CLASS_TEXT)) {
                node.classList.add(__UNSAFE_GLOBAL_LIBRARY_CLASS_TEXT)
            }
            node.innerText = date;
        }
    }
    setInterval(() => {
        date = new Date().toISOString()
        Array.from(document.getElementsByClassName("js-datetime-display")).forEach(renderTime)
    }, 400)
})() ;