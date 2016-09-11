

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

    var blocklyAdditionalStyles = [
        {
            class: 'blocklyMainBackground',
            styles: [
                {
                    key: 'fill', value: '#232323'
                },
                {
                    key: 'stroke', value: 'transparent'
                }
            ]
        },
        {
            class: 'blocklyFlyoutBackground',
            styles: [
                {
                    key: 'fill', value: '#333333'
                }
            ]
        },
        {
            class: 'blocklyFlyout',
            styles: [
                {
                    key: 'fill', value: '#333333'
                }
            ]
        }
    ];

//
// ─── STYLER ─────────────────────────────────────────────────────────────────────
//

    function applyAdditionalStyles ( ) {
        blocklyAdditionalStyles.forEach( function ( blockStyle ) {
            var elements = document.getElementsByClassName( blockStyle.class );
            for ( var index = 0; index < elements.length; index++ ) {
                var element = elements[ index ];
                blockStyle.styles.forEach( function ( style ) {
                    element.style[ style.key ] = style.value;
                });
            }
        });
    }

// ────────────────────────────────────────────────────────────────────────────────
