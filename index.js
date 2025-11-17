// Highlight active nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Sample book data
const books = [
  {
    img: 'https://cdn.exoticindia.com/images/products/original/book-09-2024/hah277.jpg',
    title: 'Part 1 & 2 - Prarambhik & Praveshika Pratham',
    desc: 'Prarambhik is the first level of music education, followed by Praveshika Pratham, which is a more advanced stage.'
  },
  {
    img: 'https://5.imimg.com/data5/ANDROID/Default/2021/6/QW/HE/LW/12759107/img-20210525-wa0009-jpg-250x250.jpg',
    title: 'Part 3 - Praveshika Purna',
    desc: 'Praveshika Purna is the third level in classical music education, building on Praveshika Pratham with deeper knowledge of ragas, taals, and performance skills.'
  },
  {
    img: 'https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019/hax059.jpg',
    title: 'Part 4 - Madhyama Pratham',
    desc: 'Madhyama Pratham is the second level in classical music education, building on Praveshika Purna with enhanced understanding of ragas, taals, and foundational performance techniques'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHroOP3Xw793qdxczTCz7SW9tUS4Bw5yd2CYgsmcxAiA2exfEfhl06-RoFFEZs26NBWas&usqp=CAU',
    title: 'Part 5 - Madhyama Purn',
    desc: 'Madhyama Purna is the fifth level in classical music education, focusing on refined raga elaboration, complex taals, and deeper performance techniques.'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71n-cIcrkeL._AC_UF1000,1000_QL80_.jpg',
    title: 'Part 6 - Visharad Pratham',
    desc: 'Visharad Pratham is the first level of advanced classical music education, focusing on mature raga presentation, complex rhythmic structures, and professional-level performance skills.'
  },
  {
    img: 'https://hvmehendaleandsons.in/wp-content/uploads/2024/09/6.jpg',
    title: 'Part 7 - Visharad Purna',
    desc: 'Visharad Purna is the final stage of advanced classical music training, focusing on mastery of ragas, intricate taals, and polished professional-level performance techniques.'
  }
];

const booksGallery = document.getElementById('booksGallery');

books.forEach(book => {
  const div = document.createElement('div');
  div.classList.add('book');
  div.innerHTML = `
    <img src="${book.img}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.desc}</p>
  `;
  booksGallery.appendChild(div);
});
