var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: "Creating a python flask app",
          excerpt: "Creating a Python Flask application The following is simple tutorial on setting up your first python web application using flask....",
          categories: ["Python"],
          tags: ["Python","Flask"],
          id: 0
      })
      
    
      this.add({
          title: "Using Tmuxinator for Python Apps",
          excerpt: "Using Tmuxinator for Python Apps With the dawn of Microservices its becoming more common to have to run and maintain...",
          categories: ["Tmux"],
          tags: ["Tmux","Tmuxinator","Python"],
          id: 1
      })
      
    
      this.add({
          title: "Primer on Docker",
          excerpt: "Docker It’s easy to get lost in all the hype behind docker and the use of containers. Over at the...",
          categories: ["Docker"],
          tags: ["Docker"],
          id: 2
      })
      
    
      this.add({
          title: "Google Analytics with Google Tag Manager",
          excerpt: "Google Analytics If you want to track user behaviour on your websites Google Analytics combined with Google Tag Manager is...",
          categories: ["Analytics","GTM"],
          tags: ["Google Analytics","Google Tag Manager"],
          id: 3
      })
      
    
      this.add({
          title: "Introduction to Kubernetes",
          excerpt: "Note: it is recommended to read up on how Docker works before trying to understand Kubernetes! Introduction to Kubernetes Kubernetes...",
          categories: ["Kubernetes"],
          tags: ["Kubernetes","Docker"],
          id: 4
      })
      
    
      this.add({
          title: "Kubernetes Administration Techniques",
          excerpt: "This blog entry is intended as a guide to some of the Kubernetes Administration features. It is not exhaustive list...",
          categories: ["Kubernetes"],
          tags: ["Kubernetes","Docker"],
          id: 5
      })
      
    
      this.add({
          title: "Building a responsive photo gallery",
          excerpt: "Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react...",
          categories: ["Javascript"],
          tags: ["Javascript","ReactJS"],
          id: 6
      })
      
    
      this.add({
          title: "Rapid prototyping with code templates",
          excerpt: "Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the...",
          categories: ["Python","Cookiecutter"],
          tags: ["Python","Cookiecutter"],
          id: 7
      })
      
    
      this.add({
          title: "Creating a Gists Webpage With ReactJS",
          excerpt: "I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata. However...",
          categories: ["Javascript","ReactJS"],
          tags: ["Javascript","ReactJS"],
          id: 8
      })
      
    
      this.add({
          title: "Useful List Of Python Resources",
          excerpt: "\n\n",
          categories: ["Python"],
          tags: ["Python"],
          id: 9
      })
      
    
      this.add({
          title: "Presentation slides with Reveal.js",
          excerpt: "Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create...",
          categories: ["Javascript","RevealJS"],
          tags: ["Javascript","RevealJS"],
          id: 10
      })
      
    
      this.add({
          title: "Creating a Blog with Jekyll and GitHub pages",
          excerpt: "Steps to create a sample blog created using Jekyll and hosted on GitHub. Setup If you want to create a...",
          categories: ["Jekyll"],
          tags: ["Jekyll","GitHub"],
          id: 11
      })
      
    
      this.add({
          title: "Python PIP Setup with artifactory",
          excerpt: "Installing a local artifactory instance: docker pull docker.bintray.io/jfrog/artifactory-oss:latest docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss In browser open http://localhost:8081...",
          categories: ["python"],
          tags: ["python","artifactory","pypi"],
          id: 12
      })
      
    
      this.add({
          title: "Getting started with OpenShift",
          excerpt: "OpenShift OpenShift provides a convenient abstraction over the concept of containers in the form of a PaaS (Platform as an...",
          categories: ["OpenShift","MiniShift","Docker"],
          tags: ["OpenShift","MiniShift","Docker"],
          id: 13
      })
      
    
      this.add({
          title: "Java 9 JShell overview",
          excerpt: "JShell Originally introduced as project Kulla, JShell is a great tool for new and experienced developers. JShell is a read-eval-print-loop...",
          categories: ["Java"],
          tags: ["Java 9","JShell"],
          id: 14
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Creating a python flask app",
        "url": "https://m-x-k.github.io/python/Creating-a-python-flask-app/",
        "excerpt": "Creating a Python Flask application The following is simple tutorial on setting up your first python web application using flask....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Using Tmuxinator for Python Apps",
        "url": "https://m-x-k.github.io/tmux/Using-Tmuxinator-for-python-apps/",
        "excerpt": "Using Tmuxinator for Python Apps With the dawn of Microservices its becoming more common to have to run and maintain...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Primer on Docker",
        "url": "https://m-x-k.github.io/docker/primer-on-docker/",
        "excerpt": "Docker It’s easy to get lost in all the hype behind docker and the use of containers. Over at the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Google Analytics with Google Tag Manager",
        "url": "https://m-x-k.github.io/analytics/gtm/google-anaytics/",
        "excerpt": "Google Analytics If you want to track user behaviour on your websites Google Analytics combined with Google Tag Manager is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Introduction to Kubernetes",
        "url": "https://m-x-k.github.io/kubernetes/Introduction-to-kubernetes/",
        "excerpt": "Note: it is recommended to read up on how Docker works before trying to understand Kubernetes! Introduction to Kubernetes Kubernetes...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kubernetes Administration Techniques",
        "url": "https://m-x-k.github.io/kubernetes/Kubernetes-administration-techniques/",
        "excerpt": "This blog entry is intended as a guide to some of the Kubernetes Administration features. It is not exhaustive list...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Building a responsive photo gallery",
        "url": "https://m-x-k.github.io/javascript/Building-a-responsive-photo-gallery/",
        "excerpt": "Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rapid prototyping with code templates",
        "url": "https://m-x-k.github.io/python/cookiecutter/Rapid-prototyping-with-code-templates/",
        "excerpt": "Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Creating a Gists Webpage With ReactJS",
        "url": "https://m-x-k.github.io/javascript/reactjs/Creating-a-Gists-Webpage-With-ReactJS/",
        "excerpt": "I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata. However...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Useful List Of Python Resources",
        "url": "https://m-x-k.github.io/python/Useful-List-Of-Python-Resources/",
        "excerpt": "\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Presentation slides with Reveal.js",
        "url": "https://m-x-k.github.io/javascript/revealjs/Presentation-slides-with-Reveal/",
        "excerpt": "Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Creating a Blog with Jekyll and GitHub pages",
        "url": "https://m-x-k.github.io/jekyll/creating-blog-with-github-pages-and-jekyll/",
        "excerpt": "Steps to create a sample blog created using Jekyll and hosted on GitHub. Setup If you want to create a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Python PIP Setup with artifactory",
        "url": "https://m-x-k.github.io/python/python-pip-setup-with-artifactory/",
        "excerpt": "Installing a local artifactory instance: docker pull docker.bintray.io/jfrog/artifactory-oss:latest docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss In browser open http://localhost:8081...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Getting started with OpenShift",
        "url": "https://m-x-k.github.io/openshift/minishift/docker/getting-started-with-open-shift/",
        "excerpt": "OpenShift OpenShift provides a convenient abstraction over the concept of containers in the form of a PaaS (Platform as an...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java 9 JShell overview",
        "url": "https://m-x-k.github.io/java/Java-9-JShell-Overview/",
        "excerpt": "JShell Originally introduced as project Kulla, JShell is a great tool for new and experienced developers. JShell is a read-eval-print-loop...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
