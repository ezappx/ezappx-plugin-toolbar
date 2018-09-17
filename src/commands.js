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

            var html = `<div class="modal fade" tabindex="-1" role="dialog" id="tipModel">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">确认清除画布？</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cancle">取消</button>
                                <button type="button" class="btn btn-primary" id="confirm">确认</button>
                            </div>
                        </div>
                        </div>
                        </div>`
            $("#" + opts.tipDivId).html(html);
            $("#tipModel").modal();
            $("#cancle").on("click", function (e) {
                $("#tipModel").modal("hide");
            });
            $("#confirm").on("click", function (e) {
                editor.DomComponents.clear();
                setTimeout(function () {
                    localStorage.clear()
                }, 0)
                $("#tipModel").modal("hide");
            });
        });
    }
})