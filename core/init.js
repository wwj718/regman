
//
// ─── INIT WINDOW ────────────────────────────────────────────────────────────────
//

    function initWindow ( ) {
        var xml = '<xml><block type="compose" deletable="false"></block></xml>';
        var toolbox = document.getElementById( 'toolbox' );

        let workspace = Blockly.inject( 'regman-coding-view', {
            collapse: false,
            toolbox: toolbox,
            scrollbars: true,
            border: false,
        });

        Blockly.Xml.domToWorkspace( Blockly.Xml.textToDom( xml ), workspace );
    }

// ────────────────────────────────────────────────────────────────────────────────
