var store = [{
        "title": "Creating a python flask app",
        "excerpt":"Creating a Python Flask applicationThe following is simple tutorial on setting up your first python web application using flask. Flask is a microframework for Python based on Werkzeug, Jinja 2. It is one of the simplest python web frameworks you will find.Requirements Python 2/3 Pip: curl -LO https://bootstrap.pypa.io/get-pip.pypython get-pip.py Virtualenvwrapper...","categories": ["Python"],
        "tags": ["Python","Flask"],
        "url": "https://m-x-k.github.io/python/Creating-a-python-flask-app/",
        "teaser":null},{
        "title": "Using Tmuxinator for Python Apps",
        "excerpt":"Using Tmuxinator for Python AppsWith the dawn of Microservices its becoming more common to have to run and maintain multiple applications in your development environments.Recently I found myself having to do this with a number of Python Flask applications. Each morning I would login and find myself creating multiple terminal...","categories": ["Tmux"],
        "tags": ["Tmux","Tmuxinator","Python"],
        "url": "https://m-x-k.github.io/tmux/Using-Tmuxinator-for-python-apps/",
        "teaser":null},{
        "title": "Primer on Docker",
        "excerpt":"DockerIt’s easy to get lost in all the hype behind docker and the use of containers. Over at the Docker main website you can find plenty of promotional material on what Docker is but in order to truly understand what it provides I believe its necessary to actually step through...","categories": ["Docker"],
        "tags": ["Docker"],
        "url": "https://m-x-k.github.io/docker/primer-on-docker/",
        "teaser":null},{
        "title": "Google Analytics with Google Tag Manager",
        "excerpt":"Google AnalyticsIf you want to track user behaviour on your websites Google Analytics combined with Google Tag Manager is an ideal solution with a simple setup process.First up go to the main Google Analytics website and signup to create yourself a new account for your website. This should provide you...","categories": ["Analytics","GTM"],
        "tags": ["GoogleAnalytics","GoogleTagManager"],
        "url": "https://m-x-k.github.io/analytics/gtm/google-anaytics/",
        "teaser":null},{
        "title": "Introduction to Kubernetes",
        "excerpt":"Note: it is recommended to read up on how Docker works before trying to understand Kubernetes!Introduction to KubernetesKubernetes is open-sourced software for automating deployment, scaling and management of containerised applications.The term kubernetes is actually Greek and stands for the steersman or helmsman, further building on the concept of shipping containers.OriginKubernetes...","categories": ["Kubernetes"],
        "tags": ["Kubernetes","Docker"],
        "url": "https://m-x-k.github.io/kubernetes/Introduction-to-kubernetes/",
        "teaser":null},{
        "title": "Kubernetes Administration Techniques",
        "excerpt":"This blog entry is intended as a guide to some of the Kubernetes Administration features. It is not exhaustive list but instead is intended to serve as an introduction to some of these commands and hopefully provide enough information to learn about more advanced features.Kubernetes Administration TechniquesFollowing on from my...","categories": ["Kubernetes"],
        "tags": ["Kubernetes","Docker"],
        "url": "https://m-x-k.github.io/kubernetes/Kubernetes-administration-techniques/",
        "teaser":null},{
        "title": "Building a responsive photo gallery",
        "excerpt":"Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react library “react-photo-gallery” which was ideal for this purpose. As a proof of concept I built a small Spring Boot app with ReactJS support:https://github.com/m-x-k/photo-galleryThe application contains a few sample images which...","categories": ["Javascript"],
        "tags": ["Javascript","ReactJS"],
        "url": "https://m-x-k.github.io/javascript/Building-a-responsive-photo-gallery/",
        "teaser":null},{
        "title": "Rapid prototyping with code templates",
        "excerpt":"Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the best command line tool I’ve found for this is the python ‘cookiecutter’ project below:https://github.com/audreyr/cookiecutterThere are a large number of sample cookiecutter projects out there but it makes sense to build...","categories": ["Python","Cookiecutter"],
        "tags": ["Python","Cookiecutter"],
        "url": "https://m-x-k.github.io/python/cookiecutter/Rapid-prototyping-with-code-templates/",
        "teaser":null},{
        "title": "Creating a Gists Webpage With ReactJS",
        "excerpt":"I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata.However while the ReactJS part was fairly straightforward I was once again reminded about Cross Site Scripting (XSS) issues when trying to call API’s from another domain using javascript. Thankfully JQuery jsonp...","categories": ["Javascript","ReactJS"],
        "tags": ["Javascript","ReactJS"],
        "url": "https://m-x-k.github.io/javascript/reactjs/Creating-a-Gists-Webpage-With-ReactJS/",
        "teaser":null},{
        "title": "Useful List Of Python Resources",
        "excerpt":"","categories": ["Python"],
        "tags": ["Python"],
        "url": "https://m-x-k.github.io/python/Useful-List-Of-Python-Resources/",
        "teaser":null},{
        "title": "Presentation slides with Reveal.js",
        "excerpt":"Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create a sample using a web client over at https://slides.com/ I personally prefer to download the latest version directly from the github account Latest release in order to generate your slide presentation by hand.Steps...","categories": ["Javascript","RevealJS"],
        "tags": ["Javascript","RevealJS"],
        "url": "https://m-x-k.github.io/javascript/revealjs/Presentation-slides-with-Reveal/",
        "teaser":null},{
        "title": "Creating a Blog with Jekyll and GitHub pages",
        "excerpt":"Steps to create a sample blog created using Jekyll and hosted on GitHub.SetupIf you want to create a similar blog you can either fork this implementation or create a new one by installing: Ruby Jekyllgem install jekylljekyll new .DevelopmentTo setup your environment with all the required plugins run the command...","categories": ["Jekyll"],
        "tags": ["Jekyll","GitHub"],
        "url": "https://m-x-k.github.io/jekyll/creating-blog-with-github-pages-and-jekyll/",
        "teaser":null},{
        "title": "Python PIP Setup with artifactory",
        "excerpt":"Installing a local artifactory instance:docker pull docker.bintray.io/jfrog/artifactory-oss:latestdocker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss In browser open http://localhost:8081 Add new remote repository: http://localhost:8081/artifactory/webapp/#/admin/repositories/remote Setup your artifactory instance with PyPI Using the remote repositories that you created you should be able to setup your local environment (or container). I usually script...","categories": ["python"],
        "tags": ["python","artifactory","pypi"],
        "url": "https://m-x-k.github.io/python/python-pip-setup-with-artifactory/",
        "teaser":null},{
        "title": "Getting started with OpenShift",
        "excerpt":"OpenShift OpenShift provides a convenient abstraction over the concept of containers in the form of a PaaS (Platform as an application Service). At its core it utilises familiar container concepts provided by the likes of Docker and Kubernetes. This typically consists of an Orchestration Framework which can be used to...","categories": ["OpenShift","MiniShift","Docker"],
        "tags": ["OpenShift","MiniShift","Docker"],
        "url": "https://m-x-k.github.io/openshift/minishift/docker/getting-started-with-open-shift/",
        "teaser":null},{
        "title": "Java 9 JShell overview",
        "excerpt":"JShellOriginally introduced as project Kulla, JShell is a great tool for new and experienced developers.JShell is a read-eval-print-loop (REPL) tool which can be used to quickly interact with Java from the command line without the need to compile your code.MacOS setup for JShell:You can start up the JShell console via...","categories": ["Java"],
        "tags": ["Java","JShell"],
        "url": "https://m-x-k.github.io/java/Java-9-JShell-Overview/",
        "teaser":null},{
        "title": "Java 9 Collection Literals",
        "excerpt":"An outline of some of the Java 9 changes to Collection literals and other areas of the core API.List.of and Set.ofExample:List&lt;Integer&gt; digits = List.of(3, 1, 4, 5, 9, 2);Set&lt;Integer&gt; digits = Set.of(2, 7, 31, 127, 8191, 131871);Points to note:Similarities to Java 8 Streams We already came across the of function...","categories": ["Java"],
        "tags": ["Java"],
        "url": "https://m-x-k.github.io/java/Java-9-Collection-Literals/",
        "teaser":null},{
        "title": "AWS App Services and Dev Tools Overview",
        "excerpt":"AWS API GatewayA fully managed service to assist developers when creating, publishing, maintaining, monitoring, and securing APIs at scale.Organisations can leverage this API Gateway to gain access to application specific API’s. This can be used for public facing API’s or restricted access to for instance background services. Benefit Detail Performance...","categories": ["AWS"],
        "tags": ["AWS","DeveloperTools"],
        "url": "https://m-x-k.github.io/aws/AWS-Application-Services-Tutorial/",
        "teaser":null},{
        "title": "AWS IAM Overview",
        "excerpt":"Over at the AWS Training center they provide a set of tutorials, which in some cases are free.I recently registered to and watched the IAM tutorial Authentication and Authorization with AWS Identity and Access Management.In an attempt to capture some of the detail for future reference and learning I have...","categories": ["AWS"],
        "tags": ["AWS","IAM"],
        "url": "https://m-x-k.github.io/aws/AWS-IAM-Overview/",
        "teaser":null},{
        "title": "Google Cloud Platform - GoLang Example",
        "excerpt":"Google Cloud Platform Hello World example with GoLangFor some time now I’ve been tempted to spend some time learning the Google Cloud Platform for developing my own projects. With so many cloud platform solutions out there it can be difficult to know where best to invest your free learning time....","categories": ["GoogleCloudPlatform"],
        "tags": ["GoogleCloudPlatform","Go","GoLang"],
        "url": "https://m-x-k.github.io/googlecloudplatform/GoogleCloudPlatform-Go-Example/",
        "teaser":null},{
        "title": "AWS Shared Responsibility Model",
        "excerpt":"Area Responsibility User Data Organisation Application Organisation Guest OS Organisation Hypervisor AWS Network AWS Physical AWS The top three areas User Data, Application and Guest OS are all the responsibility of the organisation using AWS. Typically you would think of these three areas as the EC2 service. Below these areas...","categories": ["AWS"],
        "tags": ["AWS","SharedResponsibilityModel"],
        "url": "https://m-x-k.github.io/aws/AWS-Shared-Responsibility-Model/",
        "teaser":null},{
        "title": "Building a monitoring dashboard with React and Python",
        "excerpt":"Recently I needed to build a custom monitoring dashboard to present some realtime system updates. The dashboard interface needed to be flexible and maintainable in order to be customised.Codepen.io developingAs a quick mockup I created this codepen using the React and ReactDOM CDN. It uses a static hashmap to represent...","categories": ["Javascript","React","Axios"],
        "tags": ["React","Axios","Python"],
        "url": "https://m-x-k.github.io/javascript/react/axios/Building-monitoring-dashboard-React-Python/",
        "teaser":null}]
