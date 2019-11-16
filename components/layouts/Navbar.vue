<template>
	<b-navbar toggleable="lg" type="dark">
		<b-container>
			<nuxt-link to="/" class="navbar-brand" title="تاک">
				<strong class="h1">تـــاکــــــــ‌</strong>
			</nuxt-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="mr-auto text-white">
					<b-nav-item to="/webinars" title="وبینار های قبلی">
						وبینار های قبلی
					</b-nav-item>
					<b-nav-item to="/contact" title="تماس با ما">
						تماس با ما
					</b-nav-item>
					<b-nav-item to="/about" title="درباره پروژه تاک">
						درباره پروژه تاک
					</b-nav-item>
					<b-nav-item to="/providers" title="ارائه کنندگان">
						ارائه کنندگان
					</b-nav-item>
					<b-nav-item href="https://t.me/joinchat/BN0eVEm2h9uq0C0i84hDYw" target="blank" title="ارائه کنندگان">
						<i class="fab fa-telegram font-15"></i>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
	name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
	z-index: 1;
	background: none;
}

.nuxt-link-exact-active {
	color: #fff !important;
	font-weight: 700;
}
</style>
