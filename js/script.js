{
   'use strict';

   const titleClickHandler = function (event) {

      event.preventDefault();

      const clickedElement = this;

      console.log('Link was clicked!');

      /* remove class 'active' from all article links [DONE] */

      const activeLinks = document.querySelectorAll('.titles a.active');

      for (let activeLink of activeLinks) {
         activeLink.classList.remove('active');
      }

      /* add class 'active' to the clicked link [DONE] */

      clickedElement.classList.add('active');

      console.log('clickedElement: ', clickedElement);

      /* remove class 'active' from all articles [DONE] */

      const activeArticles = document.querySelectorAll('.posts article.active');

      for (let activeArticle of activeArticles) {
         activeArticle.classList.remove('active');
      }

      /* get 'href' attribute from the clicked link */

      const articleSelector = clickedElement.getAttribute('href');
      console.log('href is:', articleSelector);

      /* find the correct article using the selector (value of 'href' attribute) */

      const targetArticle = document.querySelector(articleSelector);
      console.log('Current article is: ', targetArticle);

      /* add class 'active' to the correct article */

      targetArticle.classList.add('active');

   }


   const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles',
      optArticleTagsSelector = '.post-tags .list';


   function generateTitleLinks() {

      /* remove contents of titleList */

      const titleList = document.querySelector(optTitleListSelector);
      console.log('titleList is: ', titleList);

      titleList.innerHTML = '';

      /* for each article */

      const articles = document.querySelectorAll(optArticleSelector);

      let html = '';

      for (let article of articles) {

         /* get the article id */

         const articleId = article.getAttribute('id');

         /* find the title element */

         const articleTitle = article.querySelector(optTitleSelector).innerHTML;

         /* get the title from the title element */ /* create HTML of the link */

         const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

         /* insert link into titleList */

         html = html + linkHTML;
      }

      titleList.innerHTML = html;

      const links = document.querySelectorAll('.titles a');

      for (let link of links) {
         link.addEventListener('click', titleClickHandler);
      }

   }

   generateTitleLinks();


   function generateTags() {
      /* find all articles */

      

      /* START LOOP: for every article: */

      /* find tags wrapper */

      /* make html variable with empty string */

      /* get tags from data-tags attribute */

      /* split tags into array */

      /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */

      /* END LOOP: for every article: */
   }

   generateTags();

}


