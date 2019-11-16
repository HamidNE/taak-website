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
      {name: 'description', content: webinar.description},

      // OpenGraph
      {property: 'og:url', content: url},
      {property: 'og:type', content: 'video:webinar'},
      {property: 'og:title', content: webinar.title},
      {property: 'og:image', content: image},
      {property: 'og:video', content: webinar.links[0].value},
      {property: 'og:site_name', content: 'Taak Project'},
      {property: 'og:description', content: product.description},

      // Twitter
      {name: 'twitter:card', content: 'webinar'},
      {name: 'twitter:title', content: webinar.title},
      {name: 'twitter:image', content: image},
      {name: 'twitter:description', content: webinar.description},
    ],
    'link': [
      {rel: 'canonical', href: url}
    ]
  };
};
