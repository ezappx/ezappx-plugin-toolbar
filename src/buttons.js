define(function () {
    return (editor = {}) => {
        let pnm = editor.Panels;
        pnm.addButton('options', {
            id: 'clean-canvas',
            className: 'fa fa-trash',
            command: function () {
                editor.runCommand('canvas-clear')
            },
            attributes: {
                'title': '清空画布',
                'data-tooltip-pos': 'bottom',
            },
        });
    
        pnm.addButton('options', {
            id: 'user-logout',
            className: 'fa fa-sign-out',
            command: function () {
                console.log("logout");
                location.href = "/logout";
            },
            attributes: {
                'title': '注销',
                'data-tooltip-pos': 'bottom',
            },
        });
    }
})