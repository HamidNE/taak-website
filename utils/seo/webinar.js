/**
 * Generates common meta setup for webinar
 * @param webinar
 * @return {{meta: *[], link: {rel: string, href: *}[], title: *}}
 */
export default webinar => {
	const url = `https://taakproject.ir/webinars/${webinar.slug}`;
	const image = `https://taakproject.ir/img/webinars/${webinar.slug}.jpg`;

	return {
		title: webinar.title,
		meta: [
			{ name: "description", content: webinar.description },

			// OpenGraph
			{ hid: "og:url", property: "og:url", content: url },
			{ hid: "og:type", property: "og:type", content: "video:webinar" },
			{ hid: "og:title", property: "og:title", content: webinar.title },
			{ hid: "og:image", property: "og:image", content: image },
			{
				hid: "og:video",
				property: "og:video",
				content: webinar.links[0].value
			},
			{
				hid: "og:site_name",
				property: "og:site_name",
				content: "Taak Project"
			},
			{
				hid: "og:description",
				property: "og:description",
				content: webinar.description
			},

			// Twitter
			{ hid: "twitter:card", name: "twitter:card", content: "webinar" },
			{ hid: "twitter:title", name: "twitter:title", content: webinar.title },
			{ hid: "twitter:image", name: "twitter:image", content: image },
			{
				hid: "twitter:description",
				name: "twitter:description",
				content: webinar.description
			}
		],
		link: [{ rel: "canonical", href: url }]
	};
};
