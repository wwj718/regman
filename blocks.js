

//
// ─── COMPOSE ────────────────────────────────────────────────────────────────────
//

    Blockly.Blocks['compose'] = {
        init: function() {
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
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
        .appendField("Text")
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
        .appendField("One of");
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

// ────────────────────────────────────────────────────────────────────────────────


