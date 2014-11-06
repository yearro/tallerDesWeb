/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe000;',
			'icon-facebook' : '&#xe001;',
			'icon-google-plus' : '&#xe002;',
			'icon-feed' : '&#xe003;',
			'icon-github' : '&#xe004;',
			'icon-apple' : '&#xe005;',
			'icon-windows8' : '&#xe006;',
			'icon-pinterest' : '&#xe007;',
			'icon-html5' : '&#xe008;',
			'icon-css3' : '&#xe009;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};