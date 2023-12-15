alert('Hello from Conjura!');

// Mapbox logic

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyYW4tYzAiLCJhIjoiY2xxNmd1ZGdrMHIwMTJrcGFkYWxzbWE2NyJ9.W1usXxcSztAC5kqG-GqQOw';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/light-v11', // light map background but can be changed here
center: [0, 0], // longitude and latitude 
zoom: 0.4,
projection: 'naturalEarth' // starting projection
});
