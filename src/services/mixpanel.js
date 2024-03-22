import mixpanel from 'mixpanel-browser';

mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
  debug: true,
  persistence: 'localStorage',
});

const identifyUser = () => {
  mixpanel.identify(mixpanel.get_distinct_id());
};

const trackPageView = (properties = {}) => {
  mixpanel.track_pageview(properties, { event_name: "Page View" })
}

const trackEvent = (event, properties = {}) => {
  mixpanel.track(event, properties);
};

export default { identifyUser, trackPageView, trackEvent };
