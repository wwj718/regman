
//
// ─── SEQUENCE MAKER ─────────────────────────────────────────────────────────────
//

    function regSequence ( code ) {
        return '(?:' + code + ')';
    }

//
// ─── ENCODE TEXT ────────────────────────────────────────────────────────────────
//

    function regEncodeText ( code ) {
        var result = [ ];
        for ( var character of code ) {
            switch ( character ) {
                case '.':
                case '\\':
                case '+':
                case '*':
                case '?':
                case '[':
                case '^':
                case ']':
                case '$':
                case '(':
                case ')':
                case '{':
                case '}':
                case '=':
                case '!':
                case '<':
                case '>':
                case '|':
                case ':':
                case '-':
                    result.push( `\\${ character }` );
                    break;
                default:
                    result.push( character );
            }
        }
        return result.join('');
    }

//
// ─── MAKE ALPHABET ──────────────────────────────────────────────────────────────
//

    function regAlphabet ( text ) {
        return ( text.length === 1 )? text : '[' + text + ']';
    }

// ────────────────────────────────────────────────────────────────────────────────
