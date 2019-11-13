<template>
	<b-card
		no-body
		:title="webinar.title"
		:img-src="imagePath"
		img-alt="Image"
		tag="article"
		class="shadow-sm border-0 h-100"
	>
		<b-card-body class="text-justify d-flex flex-column">
			<b-card-text v-text="webinar.description" />
			<b-button
				block
				class="mt-auto"
				:to="{ name: 'webinars-slug', params: { slug: webinar.slug } }"
				>مشاهده</b-button
			>
		</b-card-body>
	</b-card>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "WebinarCard",
	props: {
		webinar: {
			required: true
		}
	},
	computed: {
		...mapState(["providers"]),
		imagePath() {
			return `/img/webinars/${this.webinar.slug}.jpg`;
		}
	}
};
</script>
