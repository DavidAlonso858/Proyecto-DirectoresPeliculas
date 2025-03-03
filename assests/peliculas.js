let almacenPeliculas = [
    // Peliculas de David Cronenberg
    {
        "id": 1,
        "titulo": "Dead Ringers",
        "año": 1988,
        "coordenadas": { "lat": 56.130366, "lon": -106.346771 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/o5/f8/9s/nn/4Dq2qYkyJeJGw0mfhQVXgI2pMYx-0-1000-0-1500-crop.jpg?v=7265fa979c",
        "idDirector": 1
    },
    {
        "id": 2,
        "titulo": "The Fly",
        "año": 1986,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/4/7/1/7/1/47171-the-fly-0-1000-0-1500-crop.jpg?v=30802b8573",
        "idDirector": 1
    },
    {
        "id": 3,
        "titulo": "VideoDrome",
        "año": 1983,
        "coordenadas": { "lat": 56.130366, "lon": -106.346771 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/xw/sw/3v/st/o8psaYgwTYFpqJhHISoMq178J4n-0-1000-0-1500-crop.jpg?v=837f65a552",
        "idDirector": 1
    },
    // Peliculas de Ti West
    {
        "id": 4,
        "titulo": "Pearl",
        "año": 2022,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/8/5/3/8/2/2/853822-pearl-0-1000-0-1500-crop.jpg?v=471dfc4a24",
        "idDirector": 2
    },
    {
        "id": 5,
        "titulo": "X",
        "año": 2022,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/6/8/0/3/5/8/680358-x-0-1000-0-1500-crop.jpg?v=8ba5e11abf",
        "idDirector": 2
    },
    {
        "id": 6,
        "titulo": "MaXXXine",
        "año": 2024,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": false,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/9/2/2/8/5/8/922858-maxxxine-0-1000-0-1500-crop.jpg?v=a0fd94e61f",
        "idDirector": 2
    },
    // Peliculas de Alfred
    {
        "id": 7,
        "titulo": "Psicosis",
        "año": 1960,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/1/5/7/8/51578-psycho-0-1000-0-1500-crop.jpg?v=7250c49dcd",
        "idDirector": 3,
    },
    {
        "id": 8,
        "titulo": "The Birds",
        "año": 1963,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/1/5/4/9/51549-the-birds-0-1000-0-1500-crop.jpg?v=3b7bf23e10",
        "idDirector": 3
    },
    {
        "id": 9,
        "titulo": "Frenzy",
        "año": 1972,
        "coordenadas": { "lat": 55.378051, "lon": -3.435973 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/1/5/4/7/51547-frenzy-0-1000-0-1500-crop.jpg?v=4ca676e027",
        "idDirector": 3
    },
    // Peliculas de Paco Plaza
    {
        "id": 10,
        "titulo": "REC",
        "año": 2007,
        "coordenadas": { "lat": 40.463667, "lon": -3.74922 }, // coordenadas del país de la pelicula (Este es España)
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/wc/8v/37/hl/cOW5Oc3vnjD2QgK68BUvm6GGLZ4-0-1000-0-1500-crop.jpg?v=afc2876405",
        "idDirector": 4
    },
    {
        "id": 11,
        "titulo": "Veronica",
        "año": 2017,
        "coordenadas": { "lat": 40.463667, "lon": -3.74922 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/ok/98/ds/44/8VB9xkrDF2Rd2qmmqVOmFQHPNyn-0-1000-0-1500-crop.jpg?v=ab8f269352",
        "idDirector": 4
    },
    {
        "id": 12,
        "titulo": "La abuela",
        "año": 2021,
        "coordenadas": { "lat": 40.463667, "lon": -3.74922 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/8/7/0/7/5/587075-the-grandmother-0-1000-0-1500-crop.jpg?v=2b6e928f4c",
        "idDirector": 4
    },
    // Peliculas de Guillermo del Toro
    {
        "id": 13,
        "titulo": "El laberinto del fauno",
        "año": 2006,
        "coordenadas": { "lat": 40.463667, "lon": -3.74922 }, // coordenadas del país de la pelicula (Este es España)
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/1/0/4/7/51047-pan-s-labyrinth-0-1000-0-1500-crop.jpg?v=79f89e7325",
        "idDirector": 5
    },
    {
        "id": 14,
        "titulo": "Cronos",
        "año": 1993,
        "coordenadas": { "lat": 23.634501, "lon": -102.552784 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/lx/3r/jp/b4/93JHXVhbWEorrJpfG4kiScQ27wR-0-1000-0-1500-crop.jpg?v=f743157c0c",
        "idDirector": 5
    },
    {
        "id": 15,
        "titulo": "El espinazo del diablo",
        "año": 2001,
        "coordenadas": { "lat": 40.463667, "lon": -3.74922 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/h4/ea/tl/l5/e9UizPFgoCnRCPtR0tyg2JNXY6A-0-1000-0-1500-crop.jpg?v=24af090ca9",
        "idDirector": 5
    },
    // Peliculas de James Wan
    {
        "id": 16,
        "titulo": "Saw",
        "año": 2004,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula (Este es España)
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/sm/upload/qd/18/jq/1b/oFl8U5Mzohs6z8mL8KT4Gjoiirm-0-1000-0-1500-crop.jpg?v=3c58ef6252",
        "idDirector": 6
    },
    {
        "id": 17,
        "titulo": "The Conjuring",
        "año": 2013,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": true,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/1/0/6/2/6/2/106262-the-conjuring-0-1000-0-1500-crop.jpg?v=8cbb976912",
        "idDirector": 6
    },
    {
        "id": 18,
        "titulo": "Malignant",
        "año": 2021,
        "coordenadas": { "lat": 37.09024, "lon": -95.712891 }, // coordenadas del país de la pelicula
        "premio": false,
        "imagen": "https://a.ltrbxd.com/resized/film-poster/5/4/6/3/4/8/546348-malignant-0-1000-0-1500-crop.jpg?v=11e0d82f5d",
        "idDirector": 6
    },
]