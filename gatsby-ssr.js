// Adds a class name to the body element

if (process.env.GATSBY_DEBUG_TAILWIND) {
  exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
      className: "debug-screens",
    });
  };
}
