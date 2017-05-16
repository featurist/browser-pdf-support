module.exports = function() {
  function hasAcrobatInstalled() {
    function getActiveXObject(name) {
      try { return new ActiveXObject(name); } catch(e) {}
    }

    return getActiveXObject('AcroPDF.PDF') || getActiveXObject('PDF.PdfCtrl')
  }

  function isIos() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  }
 
  return navigator.mimeTypes['application/pdf'] || hasAcrobatInstalled() || isIos()
};
