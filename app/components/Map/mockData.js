const mockData = [{
  id: 0,
  location: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  title: 'title',
  description: 'description'
}];


for (let i = 1; i < 100; i++) { // eslint-disable-line
  mockData.push({
    id: i,
    location: {
      latitude: 37.78825 + Math.random(),
      longitude: -122.4324 + Math.random(),
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    },
    title: 'title',
    description: 'description'
  });
}

const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:' +
  'ANd9GcT8y-ii0phAepPYq37hTBIjN8LQ1VAkyO39HAVSt9truadcRq2K';
export { mockData, uri };
