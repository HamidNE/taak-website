<template>
	<div>
		<section id="section1" class="section section--dark section--gradient section--gradient-two">
			<navbar />
			<b-container class="text-center text-white">
				<h1 class="display-3 pt-5">تماس با ما</h1>
				<p>در این صفحه میتوانید اطلاعات ارتباطی تاک را مشاهده کنید</p>
			</b-container>
		</section>
		<section class="section section--white pt-0 section--pb-lg" id="section2">
			<b-container>
				<p>برای هر یک از موارد زیر خوشحال خواهیم شد که با ما تماس بگیرید</p>
				<ul>
					<li>سوال در مورد وبینار های قبلی</li>
					<li>تمایل برای ارائه یک وبینار</li>
					<li>تمایل به همکاری با تیم اجرایی</li>
				</ul>
				<p>از آنجایی که تاک هنوز در مراحل اولیه حیات خود به سر می برد از هر گونه کمک اجرایی و فکری دوستان استقبال می کند.</p>
				<p>برای ارتباط با ما در <a class="text-primary" :href="website.telegramGroup" target="blank">گروه تلگرامی تاگ</a> عضو بشوید.</p>
			</b-container>
		</section>
	</div>
</template>

<script>
import website from "~/data/website";
import Navbar from "~/components/layouts/Navbar";

export default {
	name: "contact-us",
	components: { Navbar },
	head() {
		return {
			title: "تماس با ما"
		};
  },
  data() {
    return {
      website
    }
  },
};
</script>

<style lang="scss" scoped>
#section2 {
	font-size: 1.2rem;
}
</style>
