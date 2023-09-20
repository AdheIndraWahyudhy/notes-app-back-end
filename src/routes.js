const addNoteHandler = require("addNoteHandler");
const routes = [
  {
    method: "post",
    path: "/notes",
    handler: addNoteHandler,
  },
];
module.exports = routes;
