echo "compile ezappx-plugin-toolbar..."
npm run build
echo "copy dist/ezappx-plugin-toolbar.min.js to /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js/"
cp dist/ezappx-plugin-toolbar.min.js /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js/
echo "done"