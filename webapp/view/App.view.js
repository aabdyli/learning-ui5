sap.ui.jsview('myapp.view.App', {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf App
	 */
	getControllerName: function() {
		return "myapp.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf App
	 */
	createContent: function(oController) {
		return new sap.m.App({
			pages: [
				new sap.m.Page({
					title: '{i18n>appTitle}',
					content: [
						new sap.m.IconTabBar({
							id: 'topLevelIconTabBar',
							items: [
								new sap.m.IconTabFilter({
									id: 'start',
									text: '{i18n>gettingStartedFilter}',
									content: this.tabOne(oController)
								}),
								new sap.m.IconTabFilter({
									id: 'layouts',
									text: '{i18n>layoutsFilter}',
									content: this.tabTwo()
								})
							]
						}),
					]
				})
			]
		})
	},

	tabOne: function(oController) {
		return [
			new sap.m.Carousel({
				pages: [
					new sap.m.Image({
						src: 'http://www.clipartbest.com/cliparts/xcg/o7E/xcgo7EacA.jpeg',
						height: '500px',
						width: '500px'
					}),
					new sap.m.Image({
						src: 'https://1.bp.blogspot.com/-WSKhvJCMGiw/TzURUfBwZhI/AAAAAAAAAdE/nLRVp52YnCU/s1600/countries_europe_map.jpg',
						height: '500px',
						width: '500px'
					}),
				]
			}),
			new sap.m.Button({
				text: '{i18n>showHelloButtonText}',
				press: [oController.onButtonPress, oController]
			}),
			new sap.m.Input({
				value: '{helloPanel>/recipient/name}',
				description: 'Hello {helloPanel>/recipient/name}',
				valueLiveUpdate: true,
				width: '50%'
			})
		]
	},

	tabTwo: function() {
		return [
			new sap.m.MessageStrip({
				type: 'Information',
				showIcon: true,
				text: "Here's a Form Layout inside an Icon Tab Bar.	The labels on the right hand-side are aligned to the right, while the input fields are aligned to the left. The icons of 'Publish' and 'Save Draft' button are taken from the UI5 icon library. You can find them in the icon explorer by their names 'save' and 'outbox'. Finally, please note the usage of predefined margins to create a space below this MessageStrip control and above the Toolbar control."
			}),
			new sap.ui.layout.form.SimpleForm({
				id: 'simpleFormChange',
				title: 'Address',
				editable: true,
				class: 'sapUiSmallMarginTopBottom',
				content: [
					this.label('{i18n>layoutFormName}'),
					this.input('{address>/Name}'),
					this.label('{i18n>layoutFormStreet}'),
					this.input('{address>/Street}'),
					this.label('{i18n>layoutFormHouseNumber}'),
					this.input('{address>/HouseNumber}'),
					this.label('{i18n>layoutFormZIPCode}'),
					this.input('{address>/ZIPCode}'),
					this.label('{i18n>layoutFormCity}'),
					this.input('{address>/City}'),
					this.label('{i18n>layoutFormCountry}'),
					new sap.m.Select({
						items: [
							this.selectItem('{i18n>layoutCountryGermany}'),
							this.selectItem('{i18n>layoutCountryUSA}'),
							this.selectItem('{i18n>layoutCountryEngland}')
						]
					})
				]
			}),
			new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					this.button('{i18n>layoutPublishButton}', {
						icon: 'sap-icon://outbox',
						type: 'Accept'
					}),
					this.button('{i18n>layoutDraftButton}', {
						icon: 'sap-icon://save'
					})
				]
			})
		]
	},

	selectItem: function(text, options) {
		return new sap.ui.core.Item({
			text: text,
			...options
		})
	},

	button: function(text, options) {
		return new sap.m.Button({
			text: text,
			...options
		})
	},

	label: function(label, options) {
		return new sap.m.Label({
			text: label,
			...options
		})
	},

	input: function(value, options) {
		return new sap.m.Input({
			value: value,
			...options
		})
	}

});