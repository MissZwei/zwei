! function(e) {
	function t() {
		
		e.rem = m.getBoundingClientRect().width /10, m.style.fontSize = e.rem + "px";
		if(m.getBoundingClientRect().width >640){
			e.rem = 64, m.style.fontSize = e.rem + "px";
		}
	}
	var i, n = e.devicePixelRatio,
		a = 1,
		m = document.documentElement,
		r = document.createElement("meta");
	if(e.dpr = n, e.addEventListener("resize", function() {
			clearTimeout(i), i = setTimeout(t, 300)
		}, !1), e.addEventListener("pageshow", function(e) {
			e.persisted && (clearTimeout(i), i = setTimeout(t, 300))
		}, !1), m.setAttribute("data-dpr", n), r.setAttribute("name", "viewport"), r.setAttribute("content", "initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a + ", user-scalable=0"), m.firstElementChild) m.firstElementChild.appendChild(r);
	else {
		var d = document.createElement("div");
		d.appendChild(r), document.write(d.innerHTML);
	}
	t();
}(window);

		

