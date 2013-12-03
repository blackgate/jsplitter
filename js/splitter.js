 $.fn.splitter = function (option) {
  return this.each(function(){
    
    var $splitter = $(this);
    var $handler = $splitter.children('.split-handler');
    var $pane1 = $splitter.children('.split-pane1');
    var $pane2 = $splitter.children('.split-pane2');
    var vertical = $splitter.is('.vertical');
    var pane1Min = (vertical ? parseInt($pane1.css('min-height'), 10) : parseInt($pane1.css('min-width'), 10)) || 0;
    var pane2Min = (vertical ? parseInt($pane2.css('min-height'), 10) : parseInt($pane2.css('min-width'), 10)) || 0;
    var drag = false;

    $splitter.mousemove(function (ev) {
      if (!drag) return;
      if (vertical) {
        
        var dif = $splitter.offset().top;
        var height = $splitter.height();
        var pos = ev.clientY - dif;

        if (pos < pane1Min) return;
        if (height - pos < pane2Min) return;

        $handler.css('top', pos + 'px');
        $pane1.height(pos + 'px');
        $pane2.css('top', pos + 'px');
      
      } else {

        var dif = $splitter.offset().left;
        var width = $splitter.width();
        var pos = ev.clientX - dif;

        if (pos < pane1Min) return;
        if (width - pos < pane2Min) return;

        $handler.css('left', pos + 'px');
        $pane1.width(pos + 'px');
        $pane2.css('left', pos + 'px');
      }
    });
    
    $handler.mousedown(function (ev) { 
      ev.preventDefault();
      drag = true; 
    });
    
    $(document).mouseup(function (ev) {
      drag = false;
    });
    
  })
}

 $('.split-panes').splitter();