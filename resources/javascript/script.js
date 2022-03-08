function switchTheme() {
    // store current theme
    var theme = document.getElementsByTagName('link')[0];

    // if style 1 is current theme
    if (theme.getAttribute("href") == "resources/css/style1.css") {
        // set current theme to style 2
        theme.setAttribute("href", "resources/css/style2.css");
        // update current theme in local storage
        localStorage.setItem("savedAttribute", "resources/css/style2.css");

    // if style 2 is current theme
    } else {
        theme.setAttribute("href", "resources/css/style1.css");
        // update current theme in local storage
        localStorage.setItem("savedAttribute", "resources/css/style1.css");
    }
}

function setDefaultTheme() {
    var defaultAttribute = localStorage.getItem("savedAttribute");
    var theme = document.getElementsByTagName("link")[0];
    if (!defaultAttribute) {
        localStorage.setItem("savedAttribute", theme.getAttribute("href"));
    }
}

window.onload = function() {
    setDefaultTheme();
    var theme = document.getElementsByTagName("link")[0];
    theme.setAttribute("href", localStorage.getItem("savedAttribute"));
}