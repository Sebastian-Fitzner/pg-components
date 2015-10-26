/**
 * @module Slide Fox
 *
 * @author Andy Gutsche
 * @refactoring Sebastian Fitzner
 */

import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';

const $ = App.$;

class SlideFox extends AppModule {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {obj} obj - Object which is passed to our class
	 * @param {obj.el} obj - element which will be saved in this.el
	 * @param {obj.options} obj - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			visibleClass: 'is-visible'
		};

		super(obj, options);
	}

	bindEvents() {
		App.Vent.on(App.Events.scroll, this.render.bind(this));
	}

	showSlideFox() {
		this.$el.addClass(this.options.visibleClass);
	}

	hideSlideFox() {
		this.$el.removeClass(this.options.visibleClass);
	}

	render() {
		Helpers.isInViewport(this.$el) ? this.showSlideFox() : this.hideSlideFox();
	}
}

// Returns the constructor
export default SlideFox;