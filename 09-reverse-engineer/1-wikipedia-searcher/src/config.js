// option 1: .org
// export const ORIGIN = 'https://en.wikipedia.org';

// option 2: api.php //nor work
// export const ORIGIN = 'https://en.wikipedia.org/w/api.php';

// option 3:  with search query, works
export const ORIGIN = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch='

// Request URL: https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=fish

// https://en.wikipedia.org/wiki
export const WIKI=  'https://en.wikipedia.org/wiki';
// path = data.query.search[index].title.split(' ').join('%20');
// href = `${WIKI}/${path}`