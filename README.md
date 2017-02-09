# dark-hole-loader
Dark Hole Style CSS3 Loader.

dark hole loader is a lightweight jquery loader component that uses **CSS3** animations.

# basic usage
```
$(document).ready(function(){
  $("#show").click(function() {
    $("#mask").initLoader();
    setTimeout(function(){ $("#mask").finishLoader() }, 5000);
  });
});
```
# editing color scheme and dimensions

dark-hole uses [stylus] (http://stylus-lang.com/) as css compiler. The colors and dimensios can be modified editing the following stylus variables:

```
basic-font = 'Open Sans', sans-serif
dark = #3d3e42
light-green = #66cc99
light-gray = #eee
light-dark = #4a4e51

spinerWidth = 120px
spinerHeight = 120px

conatainerWidth = spinerWidth + 20
conatainerHeight = 200px

spinnerSmWidth = 1px
spinnerSmHeight = 1px
```

# demo
See a live [live preview] (http://codepen.io/pedroAquino/full/ZLjLLM/) on [codepen] (http://codepen.io)
