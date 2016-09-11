
//
// ─── STORAGE ────────────────────────────────────────────────────────────────────
//

    var workspace;

//
// ─── INIT WINDOW ────────────────────────────────────────────────────────────────
//

    function initWindow ( ) {
        setUpWorkspace( );
        setupComposer( );
        setupEventListeners( );

        applyAdditionalStyles( );
    }

//
// ─── SETUP WORKSPACE ────────────────────────────────────────────────────────────
//

    function setUpWorkspace ( ) {
        var xml = '<xml><block type="compose" deletable="false" x="500"></block></xml>';
        var toolbox = document.getElementById( 'toolbox' );

        workspace = Blockly.inject( 'regman-coding-view', {
            collapse: false,
            toolbox: toolbox,
            border: false,
        });

        Blockly.Xml.domToWorkspace( Blockly.Xml.textToDom( xml ), workspace );
    }

//
// ─── SETUP COMPOSER ─────────────────────────────────────────────────────────────
//

    function setupComposer ( ) {
        var composer = Blockly.getMainWorkspace().getTopBlocks( )[ 0 ];
        composer.moveBy( 40, 40 );
        composer.movable_ = false;
    }

//
// ─── SETUP EVENT LISTENERS ──────────────────────────────────────────────────────
//

    function setupEventListeners ( ) {
        workspace.addChangeListener( regmanOnUIChange );
    }

// ────────────────────────────────────────────────────────────────────────────────
