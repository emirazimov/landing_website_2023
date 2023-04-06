let URL = 'http://localhost:3000';

if (process.env.ENV === 'production') {
    URL = 'https://bookinglane.com'; 
} else if (process.env.ENV === 'Staging') {
    URL = 'https://landing-staging.bookinglane.com'; 
}


export function imageLoader({ src, width, height, quality }) {
    return `${URL}/${src}?w=${width}&h=${height}&q=${quality || 75}`;
}

export function remoteImageLoader({ src, width, height, quality }) {
    return `${src}?w=${width}&h=${height}&q=${quality || 75}`;
}