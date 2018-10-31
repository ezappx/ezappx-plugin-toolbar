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
            var tipHtml = `
            <div id='clear-canvas' class='modal fade' tabindex='-1' role='dialog'>
                <div class='modal-dialog' role='document'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title'>确认清除画布？</h5>
                            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-footer'>
                            <button type='button' class='btn btn-secondary' data-dismiss='modal' id='cancle-clear-canvas'>取消
                            </button>
                            <button type='button' class='btn btn-primary' id='confirm-clear-canvas'>确认</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            $("#" + opts.tipDivId).html(tipHtml);
            $("#clear-canvas").modal();
            $("#cancle-clear-canvas").on('click', function (e) {
                $("#clear-canvas").modal('hide');
            });
            $("#confirm-clear-canvas").on('click', function (e) {
                // 清空画布
                editor.DomComponents.clear();
                // 清空本地存储
                localStorage.clear();

                // 如果存在f7插件，则添加初始化代码块
                var initF7 = editor.BlockManager.get('f7-init');
                if (typeof initF7 !== "undefined") {
                    editor.DomComponents.addComponent(initF7.attributes.content);
                }
                // 同步远程数据库
                editor.store(res => {
                    $("#msg").text("Saved");
                });

                $("#clear-canvas").modal('hide');
            })
        });

        // 保存当前domcs到远程服务器
        cmdm.add('save-to-remote-storage', {
            run(editor) {
                var tipModal = `
                <div class="modal fade" tabindex="-1" role="dialog" id="saveTip">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Save to remote storage</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="msg">Saving...</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                `
                $("#" + opts.tipDivId).html(tipModal);
                $("#saveTip").modal();
                editor.store(res => {
                    $("#msg").text("Saved");
                });
            }
        });

        // display about
        cmdm.add('display-about', function () {
            var tipHtml = `
            <div id='display-about' class='modal fade' tabindex='-1' role='dialog'>
                <div class='modal-dialog' role='document'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title'>Ezappx</h5>
                            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-body'>
                            <p>所得即所得（WYSIWYG）的移动应用开发环境</p>
                            <p><strong>目前处于开发阶段，数据随时可能清空，请勿保存重要数据</strong></p>
                        </div>
                        <div class="modal-footer">
                            <p>网络服务基础研究中心</p>
                      </div>
                    </div>
                </div>
            </div>
            `
            $("#" + opts.tipDivId).html(tipHtml);
            $("#display-about").modal();
        })
    }
})