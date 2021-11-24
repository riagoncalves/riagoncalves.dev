"use strict";
/*global document: false */

function init() {
  console.log("%c| 🔧 Developed by riagoncalves.dev |", "background: #111; color: #eee; border-radius:2px; padding:.75rem;");
}

function ready() {
  if (document.readyState === 'complete') {
    init();
  } else {
      document.addEventListener('DOMContentLoaded', init);
  }

}

ready();

