
//
// ─── UPDATE CODE ON CHANGE ──────────────────────────────────────────────────────
//

    function regmanOnUIChange ( event ) {
        if ( event.type == Blockly.Events.MOVE ) { return };
        let compiledRegex = RegmanGenerator.workspaceToCode( workspace );
        document.getElementById( 'console' ).innerText = compiledRegex;
        regmanOnResize( );
    }

//
// ─── ON RESIZE ──────────────────────────────────────────────────────────────────
//

    window.onresize = function ( ) {
        regmanOnResize( );
    }

    function regmanOnResize ( ) {
        setTimeout( function ( ) {
            document.getElementsByClassName('blocklyFlyoutBackground')[ 0 ].setAttribute(
                'd', 'M 0 0 H 350 V ' + ( innerHeight - 150 ) + ' H 0 z'
            );
        });
    }

// ────────────────────────────────────────────────────────────────────────────────
