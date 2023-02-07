# Summary

This is a scafold project running a django backend with a vue.js frontend, using a token based authentication API.

# Installation
* Clone the repository

```shell
git clone https://github.com/yanivdll/django_vue_auth.git django-vue-auth
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
pip sync
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
    
```shell
python manage.py createsuperuser
```

* Run the Django server
    
```shell
python manage.py runserver
```

* Run the Vue.js server
        
```shell
cd frontend
npm run serve
```

* Test the API endpoints using a browser or Postman with a GET call to http://localhost:8000/api/v1/

