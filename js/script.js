{
// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

  const   titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [IN PROGRESS] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };




  //Task 6.4 Generating title list

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = ''){

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML= '';

    /* for each article */

    let html = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    for(let article of articles){


      /* get the article id */

      const articleId = article.getAttribute('id');

      /* find the title element */ /* get the title from the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into titleList */

      html = html + linkHTML;
      console.log(html);
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();


  function generateTags(){
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for(let article of articles){

      /* find tags wrapper */

      const tagList = article.querySelector(optArticleTagsSelector);
      tagList.innerHTML='';

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */

      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */

      for(let tag of articleTagsArray){
        console.log(tag);

        /* generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li> ';
        console.log(linkHTML);

        /* add generated code to html variable */

        html = html + linkHTML;

        /* END LOOP: for each tag */

      }

      /* insert HTML of all the links into the tags wrapper */

      tagList.innerHTML=html;

    /* END LOOP: for every article: */
    }
  }


  generateTags();





  function tagClickHandler(event){
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */

    for(let activeTagLink of activeTagLinks){

      /* remove class active */

      activeTagLink.classList.remove('active');

      /* END LOOP: for each active tag link */

    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll(href);
    console.log('tagLinks: ' + tagLinks);

    /* START LOOP: for each found tag link */

    for(let tagLink of tagLinks){

      /* add class active */

      tagLink.classList.add('active');
      console.log('dodano klasę active');

      /* END LOOP: for each found tag link */

    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    console.log('Uruchomiono funkcję addClickListenerToTags');
    /* find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
    console.log('To znalezione tagi: ' + tagLinks);

    /* START LOOP: for each link */

    for(let tagLink of tagLinks) {

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);
      console.log('Dodano listener do taga');

    /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();


  function generateAuthors(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for(let article of articles){

      /* find author wrapper */

      const Author = article.querySelector(optArticleAuthorSelector);
      Author.innerHTML='';

      /* make html variable with empty string */

      let html = '';

      /* get authors from data-author attribute */

      const articleAuthor = article.getAttribute('data-author');

      /* generate HTML of the link */

      const linkHTML = 'by <a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
      console.log(linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;

      /* insert HTML of all the links into the author wrapper */

      Author.innerHTML=html;

    /* END LOOP: for every article: */
    }
  }

  generateAuthors();

  function addClickListenersToAuthors(){
    /* find all links to authors */

    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    /* START LOOP: for each link */

    for(let authorLink of authorLinks) {

      /* add tagClickHandler as event listener for that link */

      authorLink.addEventListener('click', authorClickHandler);
      console.log('Dodano listener do autora');

    /* END LOOP: for each link */
    }

  }

  function authorClickHandler(){
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* get a 'data-author attribute of clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "autor" and extract tag from the "href" constant */

    const author = href.replace('#author-', '');

    /* find all author links with class active */

    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    /* START LOOP: for each active author link */

    for(let activeAuthorLink of activeAuthorLinks){

      /* remove class active */

      activeAuthorLink.classList.remove('active');

      /* END LOOP: for each active tag link */

    }

    /* Add class 'active' to clicked element */

    clickedElement.classList.add('active');

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author="' + author + '"]');

  }

  addClickListenersToAuthors();



}
