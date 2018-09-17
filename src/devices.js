define(function () {
    return (editor = {}) => {
        let deviceManager = editor.DeviceManager;
        deviceManager.add('Android', '500px', {
          height: '888px',
          widthMedia: '', // the width that will be used for the CSS media
         });
         deviceManager.add('iOS', '600px', {
          height: '950px',
          widthMedia: '', // the width that will be used for the CSS media
         });

         let pnm = editor.Panels;
         editor.getConfig().showDevices = 0;
         let devicePanel = pnm.addPanel({
           id: 'devices-c'
         });
         devicePanel.get('buttons').add([{
           id: 'deviceAndroid',
           command: 'set-device-android',
           className: 'fa fa-android',
           attributes: { title: "android device" },
           active: 1,
         }, {
           id: 'deviceIOS',
           command: 'set-device-ios',
           className: 'fa fa-apple',
           attributes: { title: "ios device" },
         }])
    }
})