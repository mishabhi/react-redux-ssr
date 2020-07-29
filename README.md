# react-redux-ssr-webapp
SSR + CSR + Webpack web app boilerplate

# Run locally:
npm run dev

# Run Production:
npm run prod

# Development
  1. Server side generated HTML pages are kept inside pages
  2. To populate html on server side with API call, attach the getInitialState method with Components inside pages
  
# Key Points:
  1. To optimize performance, separate Javascript bundles are generated for node dependencies and application code
  2. For SEO performance, the html page generation can be optimized by caching the pages on the server (typically on NGINX)

