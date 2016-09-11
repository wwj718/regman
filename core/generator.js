
let RegmanGenerator = new Blockly.Generator('Regman');

RegmanGenerator.init = function ( workspace ) {

}

RegmanGenerator.finish = function ( code ) {
    return code.trim( );
};

RegmanGenerator.scrubNakedValue = function ( line ) {
    return line.trim( );
};

RegmanGenerator.quote_ = function ( text ) {
    return text.trim( );
};

RegmanGenerator.scrub_ = function ( block, code ) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = RegmanGenerator.blockToCode( nextBlock );
    return code.trim( ) + nextCode.trim( );
};