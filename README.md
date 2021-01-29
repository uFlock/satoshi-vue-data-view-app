# satoshi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
Warning: won't work without .env.development.local file
```
npm run serve
```
.env.development.local example:
```dotenv
VUE_APP_LOGIN_API_URL=http://localhost:1337/api/user/login
VUE_APP_GET_USER_DETAILS_API_URL=http://localhost:1337/api/user/details
```
### Compiles and minifies for production
Warning: won't work without .env.production.local file
```
npm run build
```
.env.production.local example:
```dotenv
VUE_APP_LOGIN_API_URL=http://localhost:1337/api/user/login
VUE_APP_GET_USER_DETAILS_API_URL=http://localhost:1337/api/user/details
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Build Container
```
docker build -t vue-app-data-view .
```

### Run Container In docker
```
docker run --name vue-app-data-view -d -p 8081:80 vue-app-data-view
```

### Deploy To Kubernetes
Use your own deployment configs


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
