const generateData = () => {
  const entities = [];
  let i = 10;

  for (i; i > 0; i -= 1) {
    entities.push({
      id: i,
      title: 'Lorem Ipsum',
      date: '25 Oct at 5:37 PM',
      avatar: 'https://cdn2.stylecraze.com/wp-content/uploads/2013/01/2162_Eyebrows-For-Square-Face-Shape_shutterstock_148055564.jpg', // eslint-disable-line
      text: 'Lorem ipsum dolor sit amet, consectetur',
      uris: [
        'https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_something-simple-1.jpg', // eslint-disable-line
        'https://i.pinimg.com/originals/b2/43/7f/b2437f97daf3313ef0b72c5e0f4587b1.jpg',
        'https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_new_angle.jpg', // eslint-disable-line
        'https://i.ytimg.com/vi/RbTW-3KGELo/maxresdefault.jpg',
        'https://i.pinimg.com/originals/3e/72/6f/3e726f015975ebd9791a2eae433f4d17.jpg',
      ],
      likes: 530,
      comments: 25,
      share: 42,
    });
  }

  return entities;
};

export const mockData = generateData();
