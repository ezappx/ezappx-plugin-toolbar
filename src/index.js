import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
    }, ...opts
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add commands
  let importCommands = require('./commands');
  importCommands(editor, opts);

  // Add devices
  let importDevices = require("./devices");
  importDevices(editor);

  // Add buttons
  let improtButtons = require("./buttons");
  improtButtons(editor);
};
