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
            id: 'save-to-remote-storage',
            className: 'fa fa-floppy-o',
            command: function () {
                editor.runCommand('save-to-remote-storage')
            },
            attributes: {
                'title': '保存工程',
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

        pnm.addButton('options', {
            id: 'about',
            className: 'fa fa-question-circle',
            command: function() {
                editor.runCommand('display-about');
            },
            attributes: {
                'title': '关于',
                'data-tooltip-pos': 'bottom',
            },
        })
    }
})