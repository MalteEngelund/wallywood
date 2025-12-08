export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  user: {
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
  
  cartlines: {
    id: 'number',
    userId: 'number',
    posterId: 'number',
    quantity: 'number',
    createdAt: 'date'
  },

  userratings: {
    id: 'number',
    userId: 'number',
    posterId: 'number',
    numStars: 'number',
    createdAt: 'date'
  },

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

  genres: {
    id: 'number',
    title: 'string',
    slug: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },

  genreposterrel: {
    genreId: 'number',
    posterId: 'number',
  }

  
}