

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

    var blocklyAdditionalStyles = [
        {
            class: 'blocklyMainBackground',
            styles: [
                {
                    key: 'fill',
                    value: 'white'
                },
                {
                    key: 'stroke',
                    value: 'transparent'
                }
            ]
        },
        {
            class: 'blocklyFlyoutBackground',
            styles: [
                {
                    key: 'fill',
                    value: '#FAFAFA'
                }
            ]
        },
        {
            class: 'blocklyFlyout',
            styles: [
                {
                    key: 'fill',
                    value: 'white'
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
