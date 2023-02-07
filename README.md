# Summary

This is a scafold project running a django backend with a vue.js frontend, using a token based authentication API.

# Installation
* Clone the repository

```shell
git clone 
```

* Create a virtual environment

```shell
cd django-vue-auth
python3 -m venv .venv
source .venv/bin/activate
```

* Install the requirements:

```shell
pip install pip-tools
pip-compile requirements.in
pip install -r requirements.txt
```

* Install the frontend dependencies:

```shell
npm install
npm install axios
```

* Run the migrations

```shell
python manage.py makemigrations
python manage.py migrate
```
* Create a superuser
* Run the Django server
* Run the Vue.js server
* Test the API endpoints using a browser or Postman with a GET call to http://localhost:8000/api/v1/

