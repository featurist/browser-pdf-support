module.exports = function() {
  function hasAcrobatInstalled() {
    function getActiveXObject(name) {
      try { return new ActiveXObject(name); } catch(e) {}
    };

    return getActiveXObject('AcroPDF.PDF') || getActiveXObject('PDF.PdfCtrl');
  }
 
  if (navigator.mimeTypes['application/pdf'] || hasAcrobatInstalled()) {
    return true;
  } else {
    return false;
  }
};
