/*eslint no-var: "error"*/
sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
	],
	function (Controller, MessageToast) {
		'use strict';
		return Controller.extend('myapp.controller.App', {

			//	onInit: function() {
			//
			//	},

			//	onBeforeRendering: function() {
			//
			//	},

			//	onAfterRendering: function() {
			//
			//	},

			//	onExit: function() {
			//
			//	}

			onButtonPress: function () {
				const oBundle = this.getView().getModel('i18n').getResourceBundle()
				const sRecipient = this.getView().getModel('helloPanel').getProperty('/recipient/name')
				const sMessage = oBundle.getText('helloMsg', [sRecipient])

				MessageToast.show(sMessage)
			}
		})
})