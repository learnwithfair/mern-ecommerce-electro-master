## Preloader

In this following PHP code, you can add preloader in your website easily.

Here, adding the onload="preloaderFunction()" inside the body tag like-
```
<body onload="preloaderFunction()">
<!-- HTML contents Here -->
</body>
```
### Preloader Function
```
var preloader = document.getElementById("preloader-busy");

function preloaderFunction() {
  preloader.style.display = "none";
}
```