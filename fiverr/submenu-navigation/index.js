
function openSideBar(){
    var menu = document.getElementById('menu')
    var basePanel = document.getElementById('mm0')

    // show sidebar menu
    menu.classList.add('mmitemopen')
    menu.style.display = 'block';

    // show navigation content
    basePanel.classList.remove('mmhidden')
    basePanel.classList.add('mmopened')
    basePanel.classList.add('mmcurrent')
}

function closeSideBar(){
    var menu = document.getElementById('menu')
    var basePanel = document.getElementById('mm0')

    // hide sidebar menu
    menu.classList.remove('mmitemopen')
    menu.style.display = 'hidden';

    // hide navigation content
    basePanel.classList.remove('mmopened')
    basePanel.classList.remove('mmcurrent')
    basePanel.classList.add('mmhidden')
}

// add onclick event listeners to hide and show navigation content
var $panels = $( '.mmpanels' );
$( '.mmpanels' ).on( 'click', '[data-target]', function ( e ) {
    var target = $( this ).data( 'target' );

    // hide previous panel
    $panels.find( '[data-content]' ).removeClass('mmopened');
    $panels.find( '[data-content]' ).removeClass('mmcurrent');
    $panels.find( '[data-content]' ).addClass('mmhidden');

    // show new panel
    $panels.find( '[data-content="' + target + '"]' ).removeClass('mmhidden');
    $panels.find( '[data-content="' + target + '"]' ).addClass('mmopened');
    $panels.find( '[data-content="' + target + '"]' ).addClass('mmcurrent');

} );



