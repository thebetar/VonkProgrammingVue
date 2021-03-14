define(['vue', 'jquery', 'vue-router', 'router', 'script', 'components/about', 'components/contact', 'components/error404', 'components/footer', 'components/portfolio','components/navbar',  'components/sitecontent'], (Vue, $, VueRouter, router) => {
	var cardNm = 0;

	Vue.use(VueRouter);

	Vue.directive('contentCard', {
		bind: (el, binding, vnode) => {
			el.id = binding.value.id;
			el.className = "siteContentCard" + binding.value.size;
			el.setAttribute("name", "siteContentCard" + binding.value.size);
			if(binding.value.size == '') {
				if(cardNm == 0) {
					$(el).css({
						left: '0px',
						opacity: 1,
						zIndex: 2,
						height: 'fit-content',
						marginTop: '20px'
					});
				} else if(cardNm == 1) {
					$(el).css({
						left: '50%',
						opacity: 0.3,
						zIndex: 1,
						height: 'fit-content'
					});
				} else {
					$(el).css({
						left: '100%',
						opacity: 0.3,
						zIndex: 1,
						height: 'fit-content'
					});
				}
				cardNm++;
			}
		}
	});
	Vue.directive('mediaDiv', {
		bind: (el, binding, vnode) => {
			el.id = binding.value.id;
			el.className = (binding.value.size == "large") ? "siteMediaLarge" : "siteMedia";
			$(el).css({
				height: binding.value.height,
				backgroundImage: (binding.value.gradient == "off") ? `url('/media/${binding.value.media}-min.jpg')` : `linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0)), url('/media/${binding.value.media}-min.jpg')`
			});
			if(binding.value.offset) {
				$(el).css({
					backgroundPositionY: binding.value.offset
				});
			}
		}
	});

	router.beforeEach((to, from, next) => {
		const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta.title);
		if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
		$("html, body").animate({ scrollTop: 0 }, 'slow');
		next();
	});

	new Vue({
		el: '#app',
		router: router,
		template: `
			<div class="siteContainer">
				<siteNavbar>
					<transition name="slide-fade">
						<keep-alive>
							<router-view/>
						</keep-alive>
					</transition>
				</siteNavbar>
				<siteFooter/>
			</div> 
		`
	});
});