echo "complie ezapp-plugin-toolbar..."
npm run build
echo "copy dist/ezapp-plugin-toolbar.min.js to /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js/"
cp dist/ezapp-plugin-toolbar.min.js /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js/
echo "done"