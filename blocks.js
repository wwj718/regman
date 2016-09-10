

//
// ─── COMPOSE ────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['compose'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Regman Main Composer");
            this.appendDummyInput()
                .appendField("Global")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "global")
                .appendField("Case Insensitive")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "case-insensitive")
                .appendField("Multi-Line")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "multi-line");
            this.appendStatementInput("children")
                .setCheck("String");
            this.setInputsInline(false);
            this.setColour(120);
            this.setTooltip('');
            this.setHelpUrl('http://www.example.com/');
        }
    };

/*
    Blockly.Regman['compose'] = function(block) {
        var checkbox_global = block.getFieldValue('global') == 'TRUE';
        var checkbox_case_insensitive = block.getFieldValue('case-insensitive') == 'TRUE';
        var checkbox_multi_line = block.getFieldValue('multi-line') == 'TRUE';
        var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n';
        return code;
    };*/

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


/*
Blockly.JavaScript['alphabet'] = function(block) {
  var checkbox_numbers = block.getFieldValue('numbers') == 'TRUE';
  var checkbox_lowercase = block.getFieldValue('lowercase') == 'TRUE';
  var checkbox_uppercase = block.getFieldValue('uppercase') == 'TRUE';
  var text_other = block.getFieldValue('other');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── ENCODE ─────────────────────────────────────────────────────────────────────
//

Blockly.Blocks['encode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plain Text")
        .appendField(new Blockly.FieldTextInput(""), "text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


/*
Blockly.JavaScript['encode'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
*/

//
// ─── MORE THAN ONE ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks['one_or_more'] = {
  init: function() {
    this.appendStatementInput("regex")
        .setCheck("String")
        .appendField("One or more");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.JavaScript['one_or_more'] = function(block) {
  var statements_regex = Blockly.JavaScript.statementToCode(block, 'regex');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── ANY NUMBER OF ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks['any_number_of'] = {
  init: function() {
    this.appendStatementInput("regex")
        .setCheck("String")
        .appendField("Any number of");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.JavaScript['any_number_of'] = function(block) {
  var statements_regex = Blockly.JavaScript.statementToCode(block, 'regex');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── ANY CHARACTER ──────────────────────────────────────────────────────────────
//

    Blockly.Blocks['any'] = {
  init: function() {
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

/*
Blockly.JavaScript['any'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── MAYBE ──────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['maybe'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck("String")
        .appendField("Maybe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.JavaScript['maybe'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── ONE OF ─────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['one_of'] = {
  init: function() {
    this.appendStatementInput("Items")
        .setCheck("RegmanOption")
        .appendField("One of options");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


/*
Blockly.JavaScript['maybe'] = function(block) {
  var statements_items = Blockly.JavaScript.statementToCode(block, 'Items');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};*/

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


/*
Blockly.JavaScript['option'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

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

/*
Blockly.JavaScript['line_start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── END OF THE LINE ────────────────────────────────────────────────────────────
//

  Blockly.Blocks['line_end'] = {
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

/*
Blockly.JavaScript['line_end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── WHITE SPACE ────────────────────────────────────────────────────────────────
//

Blockly.Blocks['whitespace'] = {
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



/*
Blockly.JavaScript['whitespace'] = function(block) {
  var checkbox_space = block.getFieldValue('space') == 'TRUE';
  var checkbox_tab = block.getFieldValue('tab') == 'TRUE';
  var checkbox_linefeed = block.getFieldValue('linefeed') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

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

/*
Blockly.JavaScript['special_whitespace'] = function(block) {
  var checkbox_vtab = block.getFieldValue('vtab') == 'TRUE';
  var checkbox_nul = block.getFieldValue('nul') == 'TRUE';
  var checkbox_carrige = block.getFieldValue('carrige') == 'TRUE';
  var checkbox_formfeed = block.getFieldValue('formfeed') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── RANGE ──────────────────────────────────────────────────────────────────────
//

  Blockly.Blocks['range'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Range")
        .appendField(new Blockly.FieldTextInput("a"), "start")
        .appendField("-")
        .appendField(new Blockly.FieldTextInput("z"), "end")
        .appendField("(case:")
        .appendField(new Blockly.FieldDropdown([["lowercase", "lowercase"], ["UPPERCASE", "uppercase"], ["Both", "both"]]), "case")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
  };

  /*
Blockly.JavaScript['range'] = function(block) {
  var text_start = block.getFieldValue('start');
  var text_end = block.getFieldValue('end');
  var dropdown_case = block.getFieldValue('case');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

//
// ─── MATCH ──────────────────────────────────────────────────────────────────────
//

  Blockly.Blocks['match'] = {
  init: function() {
    this.appendStatementInput("match")
        .setCheck("String")
        .appendField("Remember Match");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.JavaScript['match'] = function(block) {
  var statements_match = Blockly.JavaScript.statementToCode(block, 'match');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

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

/*
Blockly.JavaScript['anything_but'] = function(block) {
  var statements_anything_but = Blockly.JavaScript.statementToCode(block, 'anything-but');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 */

// ────────────────────────────────────────────────────────────────────────────────


