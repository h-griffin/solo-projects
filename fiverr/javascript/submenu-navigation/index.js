
function openSideBar(){
    var menu = document.getElementById('menu')
    var basePanel = document.getElementById('mm0')

    // show sidebar menu
    menu.classList.remove('mmhide')
    menu.classList.add('mmitemopen')

    // show navigation content
    basePanel.classList.remove('mmhidden')
    basePanel.classList.add('mmopened')
    basePanel.classList.add('mmcurrent')
}

function closeSideBar(){
    var menu = document.getElementById('menu')
    var basePanel = document.getElementById('mm0')

    // hide navigation content
    basePanel.classList.remove('mmopened')
    basePanel.classList.remove('mmcurrent')
    basePanel.classList.add('mmhidden')

    // hide sidebar menu
    menu.classList.add('mmhide')
    $( '.mmpanels' ).find( '[data-content]' ).addClass('mmhidden');
    $( '.mmpanels' ).find( '[data-content]' ).removeClass('mmsubopened');
   
}

// add onclick event listeners to hide and show navigation content
var $panels = $( '.mmpanels' );
$( '.mmpanels' ).on( 'click', '[data-target]', function ( e ) {
    var target = $( this ).data( 'target' );
  
    // open submenu
    if(target === "mm2" || target === "mm3"){
        $panels.find('#mm0').addClass("mmsubopened")
        $panels.find('#mm0').addClass("mmhidden")
        $panels.find('#mm1').addClass("mmsubopened")
        $panels.find('#mm1').addClass("mmhidden")
    }
    // back from submenus
    if(target === "mm1"){
        $panels.find('#mm2').removeClass("mmsubopened")
        $panels.find('#mm2').removeClass("mmhidden")
        $panels.find('#mm3').removeClass("mmsubopened")
        $panels.find('#mm3').removeClass("mmhidden")
    }
    if(target === "mm0"){
        $panels.find('#mm1').removeClass("mmsubopened")
        $panels.find('#mm1').removeClass("mmhidden")
        $panels.find('#mm2').removeClass("mmsubopened")
        $panels.find('#mm2').removeClass("mmhidden")
        $panels.find('#mm3').removeClass("mmsubopened")
        $panels.find('#mm3').removeClass("mmhidden")
    }

    // remove active from previous panels
    $panels.find( '[data-content]' ).removeClass('mmopened');
    $panels.find( '[data-content]' ).removeClass('mmcurrent');

    // show new panel
    $panels.find( '[data-content="' + target + '"]' ).removeClass('mmsubopened');
    $panels.find( '[data-content="' + target + '"]' ).removeClass('mmhidden');
    // delay animations so they dont overlap
    setTimeout(function(){
        $panels.find( '[data-content="' + target + '"]' ).addClass('mmopened');
        $panels.find( '[data-content="' + target + '"]' ).addClass('mmcurrent');
     }, 150);


} );



