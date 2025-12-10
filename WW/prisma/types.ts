export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  users: {
    id: 'number',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    password: 'string',
    role: 'string',
    isActive: 'boolean',
    createdAt: 'date'
  },
  // Her kommer næste model
  
  posters: {
    id: 'number',
    name: 'string',
    slug: 'string',
    description: 'string',
    image: 'string',
    width: 'number',
    height: 'number',
    price: 'number',
    stock: 'number',
    createdAt: 'date',
    updatedAt: 'date',
    
  },

  cartLines: {
    id: 'number',
    userId: 'number',
    posterId: 'number',
    quantity: 'number',
    createdAt: 'date'
  },

  userRatings: {
    id: 'number',
    userId: 'number',
    posterId: 'number',
    numStars: 'number',
    createdAt: 'date'
  },

  

  genres: {
    id: 'number',
    title: 'string',
    slug: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },

  genrePosterRel: {
    genreId: 'number',
    posterId: 'number',
  }

  
}