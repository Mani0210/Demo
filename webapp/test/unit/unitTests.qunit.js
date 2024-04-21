/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comdemo/mj70/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
