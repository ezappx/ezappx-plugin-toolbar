define(function () {
    return (editor, opts = {}) => {
        let cmdm = editor.Commands;

        // set devices
        cmdm.add('set-device-android', {
            run(editor) {
                editor.setDevice('Android');
            }
        });

        cmdm.add('set-device-ios', {
            run(editor) {
                editor.setDevice('iOS');
            }
        });

        // clear canvas
        cmdm.add('canvas-clear', function () {
            var clearCanvas = opts.clearCanvas;
            $(clearCanvas.id).modal();
            $(clearCanvas.cancleBtnId).on('click', function (e) {
                $(clearCanvas.id).modal('hide');
            });
            $(clearCanvas.confirmBtnId).on('click', function (e) {
                editor.DomComponents.clear();
                setTimeout(function () {
                    localStorage.clear();
                }, 0);
                $(clearCanvas.id).modal('hide');
            })
        });

        // display about
        cmdm.add('display-about', function () {
            $(opts.displayAboutId).modal();
        })
    }
})