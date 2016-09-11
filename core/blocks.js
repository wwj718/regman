
//
// ─── COMPOSE ────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['compose'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Regman");
            this.appendStatementInput("children")
                .setCheck("String");
            this.setInputsInline(false);
            this.setColour(120);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['compose'] = function(block) {
        var statements_children = RegmanGenerator.statementToCode(block, 'children').trim( );
        return '/' + statements_children.trim( ) + '/';
    };

//
// ─── ALPHABET ───────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['alphabet'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Alphabet")
                .appendField("0-9")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "numbers")
                .appendField("a-z")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "lowercase")
                .appendField("A-Z")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "uppercase")
                .appendField("Other")
                .appendField(new Blockly.FieldTextInput(""), "other");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['alphabet'] = function(block) {
        var checkbox_numbers = block.getFieldValue('numbers') == 'TRUE';
        var checkbox_lowercase = block.getFieldValue('lowercase') == 'TRUE';
        var checkbox_uppercase = block.getFieldValue('uppercase') == 'TRUE';
        var text_other = block.getFieldValue('other');

        var code = '';
        if ( checkbox_numbers ) { code += '0-9' };
        if ( checkbox_lowercase ) { code += 'a-z' };
        if ( checkbox_uppercase ) { code += 'A-Z' };
        code += regEncodeText( text_other );

        return '[' + code + ']';
    };

//
// ─── ENCODE UNICODE ─────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'unicode' ] = {
        init: function ( ) {
            this.appendDummyInput( )
                .appendField( "Encode Unicode" )
                .appendField( new Blockly.FieldTextInput( "" ), "text" );
            this.setInputsInline( true );
            this.setPreviousStatement( true, "String" );
            this.setNextStatement( true, "String" );
            this.setColour( 330 );
            this.setTooltip( '' );
            this.setHelpUrl( 'http://www.example.com/' );
        }
    };

    RegmanGenerator[ 'unicode' ] = function ( block ) {
        return regUnicodify( block.getFieldValue( 'text' ) );
    };

//
// ─── ENCODE ─────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'encode' ] = {
        init: function ( ) {
            this.appendDummyInput( )
                .appendField( "Plain Text" )
                .appendField( new Blockly.FieldTextInput( "" ), "text" );
            this.setInputsInline( true );
            this.setPreviousStatement( true, "String" );
            this.setNextStatement( true, "String" );
            this.setColour( 330 );
            this.setTooltip( '' );
            this.setHelpUrl( 'http://www.example.com/' );
        }
    };

    RegmanGenerator[ 'encode' ] = function ( block ) {
        return regEncodeText( block.getFieldValue( 'text' ) );
    };

//
// ─── FREE FORM REGEX ────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'free_form_regex' ] = {
        init: function ( ) {
            this.appendDummyInput( )
                .appendField( "Freeform RegExp" )
                .appendField( new Blockly.FieldTextInput( "" ), "regex" );
            this.setInputsInline( true );
            this.setPreviousStatement( true, "String" );
            this.setNextStatement( true, "String" );
            this.setColour( 330 );
            this.setTooltip( '' );
            this.setHelpUrl( 'http://www.example.com/' );
        }
    };

    RegmanGenerator[ 'free_form_regex' ] = function ( block ) {
        return block.getFieldValue( 'regex' );
    };

//
// ─── MORE THAN ONE ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'one_or_more' ] = {
        init: function() {
            this.appendDummyInput()
                .appendField("One or more");
            this.appendStatementInput("regex")
                .setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(210);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'one_or_more' ] = function ( block ) {
        var statements_regex = RegmanGenerator.statementToCode( block, 'regex' ).trim( );
        return regSequence( statements_regex ) + '+';
    };

//
// ─── ANY NUMBER OF ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks['any_number_of'] = {
        init: function() {
            this.appendDummyInput( )
                .appendField("Any number of");
            this.appendStatementInput("regex")
                .setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(210);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['any_number_of'] = function(block) {
        var statements_regex = RegmanGenerator.statementToCode( block, 'regex' ).trim( );
        return regSequence( statements_regex ) + '*';
    };

//
// ─── ANY CHARACTER ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'any' ] = {
        init: function( ) {
            this.appendDummyInput()
                .appendField("Any Character!");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(20);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'any' ] = function ( block ) {
        return '.';
    };


//
// ─── MAYBE ──────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['maybe'] = {
        init: function() {
            this.appendDummyInput( )
                .appendField("Maybe");
            this.appendStatementInput("NAME")
                .setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(210);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'maybe' ] = function( block ) {
        var statements_name = RegmanGenerator.statementToCode( block, 'NAME' ).trim();
        return regSequence( statements_name ) + '?';
    };


//
// ─── ONE OF ─────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['one_of'] = {
        init: function() {
            this.appendDummyInput( )
                .appendField("One of options");
            this.appendStatementInput("Items")
                .setCheck("RegmanOption");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(210);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['one_of'] = function(block) {
        var statements_items = RegmanGenerator.statementToCode(block, 'Items').trim( );
        return regSequence( statements_items.substring( 1 ) );
    };

//
// ─── REGMAN OPTION ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks['option'] = {
        init: function() {
            this.appendStatementInput("NAME")
                .setCheck(null)
                .appendField("Option");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "RegmanOption");
            this.setNextStatement(true, "RegmanOption");
            this.setColour(160);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['option'] = function ( block ) {
        return '|' + RegmanGenerator.statementToCode(block, 'NAME').trim( );
    };

//
// ─── START OF THE LINE ──────────────────────────────────────────────────────────
//

    Blockly.Blocks['line_start'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Start of the Line");
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(20);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'line_start' ] = function ( block ) {
        return '^';
    };

//
// ─── END OF THE LINE ────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'line_end' ] = {
        init: function() {
            this.appendDummyInput()
                .appendField("End of the Line");
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(20);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'line_end' ] = function ( block ) {
        return '$';
    };

//
// ─── WHITE SPACE ────────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'whitespace' ] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Whitespace")
                .appendField("Space")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "space")
                .appendField("Tab")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "tab")
                .appendField("Linefeed (\\n)")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "linefeed");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(20);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };


    RegmanGenerator['whitespace'] = function(block) {
        var checkbox_space = block.getFieldValue('space') == 'TRUE';
        var checkbox_tab = block.getFieldValue('tab') == 'TRUE';
        var checkbox_linefeed = block.getFieldValue('linefeed') == 'TRUE';

        var chars = [ ];
        if ( checkbox_space ) { chars.push( '\\s' ) };
        if ( checkbox_tab ) { chars.push( '\\t' ) };
        if ( checkbox_linefeed ) { chars.push( '\\n' ) };

        return regAlphabet( chars );
    };

//
// ─── SPECIAL WHITE SPACE ────────────────────────────────────────────────────────
//

    Blockly.Blocks['special_whitespace'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Special Whitespace");
            this.appendDummyInput()
                .appendField("Vertical Tab (\\v)")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "vtab")
                .appendField("NUL (\\0)")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "nul");
            this.appendDummyInput()
                .appendField("Carriage Return (\\r)")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "carrige");
            this.appendDummyInput()
                .appendField("Form-feed (\\f)")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "formfeed");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(20);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['special_whitespace'] = function(block) {
        var checkbox_vtab = block.getFieldValue('vtab') == 'TRUE';
        var checkbox_nul = block.getFieldValue('nul') == 'TRUE';
        var checkbox_carrige = block.getFieldValue('carrige') == 'TRUE';
        var checkbox_formfeed = block.getFieldValue('formfeed') == 'TRUE';

        var code = [ ];
        if ( checkbox_vtab ) { code.pus( '\\v' ) };
        if ( checkbox_nul ) { code.pus( '\\0' ) };
        if ( checkbox_carrige ) { code.pus( '\\r' ) };
        if ( checkbox_formfeed ) { code.pus( '\\f' ) };

        return regAlphabet( code );
    };

//
// ─── RANGE ──────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks[ 'range' ] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Range")
                .appendField(new Blockly.FieldTextInput("a"), "start")
                .appendField("-")
                .appendField(new Blockly.FieldTextInput("z"), "end");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'range' ] = function ( block ) {
        var text_start = block.getFieldValue('start');
        var text_end = block.getFieldValue('end');
        return '[' + text_start + '-' + text_end + ']';
    };

//
// ─── MATCH ──────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['match'] = {
        init: function() {
            this.appendDummyInput( )
                .appendField("Remember Match");
            this.appendStatementInput("match")
                .setCheck("String");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(210);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'match' ] = function ( block ) {
        var statements_match = RegmanGenerator.statementToCode(block, 'match').trim( );
        return '(' + statements_match + ')';
    };

//
// ─── SEQUENCE ───────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['sigma'] = {
        init: function() {
            this.appendDummyInput( )
                .appendField("Sigma");
            this.appendStatementInput("sigma")
                .setCheck("String");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator[ 'sigma' ] = function ( block ) {
        var statements_sequence = RegmanGenerator.statementToCode(block, 'sigma').trim( );
        return '[' + statements_sequence + ']';
    };

//
// ─── ANYTHING BUT ───────────────────────────────────────────────────────────────
//

    Blockly.Blocks['anything_but'] = {
        init: function() {
            this.appendStatementInput("anything-but")
                .setCheck("String")
                .appendField("Anything But");
            this.setInputsInline(false);
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(260);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['anything_but'] = function(block) {
        var statements_anything_but = RegmanGenerator.statementToCode(block, 'anything-but').trim( );
        return '[^' + statements_anything_but + ']';
    };

//
// ─── COMMENT ────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['comment'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("#")
                .appendField(new Blockly.FieldTextInput("Write your comment here"), "comment");
            this.setPreviousStatement(true, "String");
            this.setNextStatement(true, "String");
            this.setColour(65);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

    RegmanGenerator['comment'] = function ( block ) {
        return '';
    };

// ────────────────────────────────────────────────────────────────────────────────


