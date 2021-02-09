Instructions:
1. Clone  / fork this repository
2. Go into frontend folder and run 'yarn'
3. Go into backend folder and run 'yarn'
4. Set up environmental variables:
 - backend: in backend folder create a .env file with the following variables:
```
PORT=8080
REACT_APP_FRONTEND=http://localhost:3000
REACT_APP_BACKEND=http://localhost:8080/api
```
 - frontend: in frontend folder create a .env file with the following variables:
```
REACT_APP_FRONTEND=http://localhost:3000
REACT_APP_BACKEND=http://localhost:8080/api
```

5. Run application:
 - in backend folder: launch server with 'yarn start'
 - in frontend folder: launch forntend server with 'yarn start'
 - The application should automatically open in your browser.
