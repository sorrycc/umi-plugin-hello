module.exports = function(api) {
  api.modifyHTMLWithAST($ => {
    $('body').prepend(`<h1>hello umi plugin</h1>`);
  });
};
