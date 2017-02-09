(function($) {
  $.fn.initLoader = function(config) {
    
    var container = this;
    
    var loader = {
      
      setMask: function() {
        container.addClass("trans-mask")
        container.addClass("l-mask");
        container.addClass("mask");
      },
      
      createLoader: function() {
        var html = "";
        
        html += "<div class='l-center'>";
          html += "<div class='circle spinner l-spinner'>";
            html += "<div class='circle l-spinner-sm spinner-sm a-spinner-sm'>";
            html += "</div>";
          html += "</div>";
          html += "<p>Loading ...</p>";
        html += "</div>";
        
        var el = $(html);
        container.append(el);
      }
      
    };
    
    loader.setMask();
    loader.createLoader();
  };
  
  $.fn.finishLoader = function(){
    
    this.find(".l-center").remove();
    
    this.removeClass("trans-mask")
    this.removeClass("l-mask");
    this.removeClass("mask");
  }
  
}(jQuery));