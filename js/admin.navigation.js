/*
 * CMS Pico - Integration of Pico within your files to create websites.
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2017
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** global: OC */
/** global: admin_pico_elements */
/** global: admin_pico_result */
/** global: admin_pico_define */

var admin_pico_nav = {

	retrieveSettings: function () {
		$.ajax({
			method: 'GET',
			url: OC.generateUrl('/apps/cms_pico/admin/settings'),
			data: {}
		}).done(function (res) {
			admin_pico_result.displaySettings(res);
		});
	},


	addCustomTemplate: function () {
		$.ajax({
			method: 'PUT',
			url: OC.generateUrl('/apps/cms_pico/admin/templates'),
			data: {
				template: admin_pico_elements.cms_pico_new_template.val()
			}
		}).done(function (res) {
			admin_pico_result.displaySettings(res);
		});
	},


	removeCustomTemplate: function (template) {
		$.ajax({
			method: 'DELETE',
			url: OC.generateUrl('/apps/cms_pico/admin/templates'),
			data: {
				template: template
			}
		}).done(function (res) {
			admin_pico_result.displaySettings(res);
		});
	},


	interactionCurrentTemplate: function (div) {
		var name = div.attr('data-name');
		div.find('TD.delete').on('click', function () {
			admin_pico_nav.removeCustomTemplate(name);
		});
	},



	addCustomTheme: function () {
		$.ajax({
			method: 'PUT',
			url: OC.generateUrl('/apps/cms_pico/admin/themes'),
			data: {
				theme: admin_pico_elements.cms_pico_new_theme.val()
			}
		}).done(function (res) {
			admin_pico_result.displaySettings(res);
		});
	},


	removeCustomTheme: function (theme) {
		$.ajax({
			method: 'DELETE',
			url: OC.generateUrl('/apps/cms_pico/admin/themes'),
			data: {
				theme: theme
			}
		}).done(function (res) {
			admin_pico_result.displaySettings(res);
		});
	},


	interactionCurrentTheme: function (div) {
		var name = div.attr('data-name');
		div.find('TD.delete').on('click', function () {
			admin_pico_nav.removeCustomTheme(name);
		});
	},



	generateTmplCustomTemplate: function (entry) {
		var div = $('#tmpl_custom_template');
		if (!div.length) {
			return;
		}

		var tmpl = div.html();
		tmpl = tmpl.replace(/%%name%%/g, escapeHTML(entry));
		return tmpl;
	},


	generateTmplCustomTheme: function (entry) {
		var div = $('#tmpl_custom_theme');
		if (!div.length) {
			return;
		}

		var tmpl = div.html();
		tmpl = tmpl.replace(/%%name%%/g, escapeHTML(entry));
		return tmpl;
	}


};