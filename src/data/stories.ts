export type Story = {
  slug: string; title: string; image: string; thumbnailOnly?: boolean;
  date: string; place: string; category: string; paragraphs: string[];
};

export const stories: Story[] = [
  { slug:'san-cristobal', title:'Finding Stillness in the Hills of San Cristóbal', image:'san-cristobal.png', date:'October 10, 2025', place:'Chiapas, Mexico', category:'Slow travel', paragraphs:[
    'Some places ask you to slow down before you have even unpacked. A quiet courtyard, an orange wall warmed by the afternoon sun, mountains behind the trees. San Cristóbal is a reminder to leave a little room in the day for nothing at all.',
    'This is a field note about noticing the ordinary: a doorway left open, a path through the grass, a moment of quiet between one place and the next. The hills make a good excuse to keep walking without watching the time.',
    'There is no grand itinerary here. Just space for a long lunch, a small discovery, and the feeling that you do not need to hurry on.'
  ] },
  { slug:'rome', title:'Wandering Through the Streets of Rome', image:'rome-story.png', date:'October 2, 2025', place:'Rome, Italy', category:'City journal', paragraphs:[
    'Take the street that looks interesting. Stop for a small coffee. Let the afternoon turn into a long walk. Rome rewards curiosity: a quiet doorway, a patch of warm stone, a familiar monument seen from an unfamiliar corner.',
    'The most memorable part of a city is not always the place you set out to see. Sometimes it is the route between the landmarks, when you look up from the map and follow the light instead.',
    'Leave the evening open. Walk until the streets begin to feel familiar, then take one more turn.'
  ] },
  { slug:'monument-valley', title:'Driving Across Monument Valley', image:'monument-valley.png', date:'September 17, 2025', place:'Arizona, USA', category:'On the road', paragraphs:[
    'The landscape gets bigger and the conversation gets quieter. Red rock rises beyond the windscreen, the road stretches ahead, and the best part of the journey is simply being there.',
    'Leave time to pull over. The view is worth it. A journey measured only in distance misses the small pauses that give the road its character.',
    'Watch the light move across the rock. Take the photograph, then put the camera down for a while.'
  ] },
  { slug:'northern-vietnam', title:'Walking the Terraces of Northern Vietnam', image:'vietnam-thumb.png', thumbnailOnly:true, date:'September 2, 2025', place:'Northern Vietnam', category:'Long walks', paragraphs:[
    'A path through the terraces has its own pace. The view changes slowly: a line of green, a narrow trail, people carrying on with the work of the day.',
    'This short field note is an invitation to look beyond the panorama and notice the small details along the way. Walk gently, leave space, and let the landscape unfold.'
  ] },
  { slug:'lycian-coast', title:'Admiring the Clifftops of the Lycian Coast', image:'lycian-thumb.png', thumbnailOnly:true, date:'August 20, 2025', place:'Lycian Coast, Türkiye', category:'Coastal days', paragraphs:[
    'An open door, a view of the water, and an afternoon with no fixed destination. Sometimes the place you stop becomes the whole story.',
    'The coast is best taken slowly. Leave room for a pause on the path and for the feeling of being somewhere new without needing to do very much at all.'
  ] },
  { slug:'red-sea', title:'Waiting by the Shores of the Red Sea', image:'red-sea-thumb.png', thumbnailOnly:true, date:'August 1, 2025', place:'The Red Sea', category:'Small moments', paragraphs:[
    'A quiet roadside stop, bright water, and the particular stillness of waiting. Not every travel story needs a full day of activity.',
    'Some are simply a record of the light, the color of a building, and the way time stretches when there is nowhere you need to be.'
  ] },
  { slug:'dolomites', title:'Tracing Trails Through the Dolomite Highlands', image:'dolomites-thumb.png', thumbnailOnly:true, date:'July 30, 2025', place:'Dolomites, Italy', category:'Higher ground', paragraphs:[
    'A mountain trail turns a distant view into a series of small steps. Look up, look down, keep moving, stop when something catches your eye.',
    'There is pleasure in a simple day outside: a path to follow, a change in the weather, and a little more room to think.'
  ] },
  { slug:'tasmania', title:'Wild Camping Along Tasmania’s East Coast', image:'tasmania-thumb.png', thumbnailOnly:true, date:'July 11, 2025', place:'Australia', category:'Wild camping', paragraphs:[
    'The coast of Tasmania doesn’t care where you came from. It just opens up—wild, wind-lashed, and utterly indifferent. I parked the camper by a cliff’s edge one afternoon, unsure if I’d stay one night or three. I stayed four.',
    'Each morning I woke to the sound of the ocean testing the shoreline. Mornings were fog-wrapped and quiet. Evenings came on soft and slow, like a tide that didn’t know whether to rise or stay. I cooked with whatever I had. Slept with the windows cracked. Let the wind be my companion.',
    'There’s a kind of clarity that only comes from solitude and sea air. I didn’t write much. I didn’t need to. The days were filled with the kind of small moments that don’t make it into postcards—lighting a match with cold fingers, watching sea birds fly in formation, rinsing dishes in a cold creek.',
    'Camping out there didn’t feel like an escape. It felt like a return. To something quieter, rougher, more real.'
  ] },
];
