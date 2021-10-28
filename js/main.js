const data = [
  {
    cName: 'food',
    image: 'images/food/1.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/1.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/2.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/3.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/2.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/4.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/3.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/5.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/6.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/4.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/7.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/8.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/5.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/9.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/6.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/10.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/11.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/7.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/8.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/12.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/13.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/14.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'food',
    image: 'images/food/15.jpg',
    title: 'title',
    description: 'description',
  },
  {
    cName: 'me',
    image: 'images/me/9.jpg',
    title: 'title',
    description: 'description',
  },
];

const main = document.querySelector('main');
const section = document.createElement('section');

for (let el of data) {
  const article = document.createElement('article');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  article.className = el.cName;
  img.src = el.image;
  h2.innerText = el.title;
  p.innerText = el.description;

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);

  article.appendChild(div);
  section.appendChild(article);
}
main.appendChild(section);

console.log(main);

window.addEventListener('load', () => {
  const grid = new Isotope('section', {
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: '0.5s',
  });

  const btns = document.querySelectorAll('main ul li');
  for (let el of btns) {
    el.addEventListener('click', e => {
      e.preventDefault();

      const sort = e.currentTarget
        .querySelector('a')
        .getAttribute('data-category');

      console.log(sort, typeof sort);

      grid.arrange({
        filter: sort,
      });

      for (let el of btns) {
        el.classList.remove('on');
      }
      e.currentTarget.classList.add('on');
    });
  }
});
