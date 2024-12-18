document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [

        { name: 'Henrique & Juliano', image: 'img/h&j.jpg'},
        { name: 'Jorge & Mateus', image: 'img/jorge e mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: 'img/ze neto e cristiano.jpg' },
        { name: 'Luan Santana', image: 'img/luan.jpg'},
        { name: 'Justin Bieber', image: 'img/justin.jpg.jpg' },
        { name: 'Summer Walker', image: 'img/summer.jpg' },
        { name: 'Matheus & Kauan', image: 'img/matheus e kauan.jpg' },
        { name: 'Ariana Grande', image: 'img/ariana.jpg' },
        { name: 'Don Toliver', image: 'img/don toliver.jpg' },
        { name: 'Eminem', image: 'img/eminem.jpg'}
        ];
    
    
        const albumsData = [
        { name: 'Journals', artist: 'Justin Bieber', image: 'img/journals.jpg'},
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: 'img/album h&j.jpg' },
        { name: 'Sem Cortes', artist: 'Jorge e Mateus', image: 'img/j&m album.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: 'img/album caju.jpg' },
        { name: 'CHROMAKOPIA', artist: 'Tyler, The Creator', image: 'img/album tyler.jpg' },
        { name: 'NA PRAIA', artist: 'Matheus e Kauan', image:'img/na praia.jpg' },
        { name: 'JESUS IS KING', artist: 'Kanye West', image:'img/jesus is king.jpg' },
        { name: 'AFTER HOURS', artist: 'The Weekend', image:'img/album abel.jpg' },
        { name: 'TODOS OS CANTOS', artist: 'Marília Mendonça', image:'img/todos os cantos.jpg' },
        { name: 'BREEZY (Deluxe)', artist: 'Chris Brown', image:'img/cb.jpg' }
        ];
        const artistsGrid = document.querySelector('.artists-grid')
        const albumsGrid = document.querySelector('.albums-grid')

        artistsData.forEach(artist=>{
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')

            artistCard.innerHTML= `
            <img src="${artist.image}" alt= "imagem do ${artist.name}">
            <div>
            <h3>${artist.name}</h3>
            <p>artista</p>
            </div>
            `
            artistsGrid.appendChild(artistCard)

        })
        albumsData.forEach(album=>{
            const albumCard = document.createElement('div')
            albumCard.classList.add('album-card')

            albumCard.innerHTML= `
            <img src="${album.image}" alt= "imagem do ${album.name}">
            <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            </div>
            `

            albumsGrid.appendChild(albumCard)

        })
} )
