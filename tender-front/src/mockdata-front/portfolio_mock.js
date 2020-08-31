const portfolio_mock = [
  {
    _id: '2x8jf0349',
    title: 'House in Bahamas',
    description: 'This project is to build a super house in the Bahamas islands, with a private pier and an infinity pool',
    status: 'ongoing',
    location: {
      country: 'Bahamas',
      region: 'Spanish Wells Island',
      city: 'Spanish Wells',
      street: 'South St 34',
      postalCode: 'XK40G'
    },
    estimate: {
      budget: 20000000,
      currency: 'eur',
      completion: '2020-10-11T12:00:00.000Z'
    },
    current: {
      budget: 20500000,
      invested: 0.8,
      currency: 'eur',
      completion: '2020-10-17T12:00:00.000Z'
    },
    slug: 'house-spanish-wells-bahamas'
  },
  {
    _id: '2x8jfa449',
    title: 'Hacienda refurbishment',
    description: 'Refurbishment of an old Hacienda in Mexico, close to DF, 50.000 acres of land',
    status: 'planned',
    location: {
      country: 'Mexico',
      region: 'Mexico Distrito Federal',
      city: 'Monterey',
      street: 'Calle Cocoyoc 138',
      postalCode: '2352C'
    },
    estimate: {
      budget: 580000000,
      currency: 'eur',
      completion: '2021-11-25T12:00:00.000Z'
    },
    current: {
      budget: 0,
      invested: 0.05,
      currency: 'eur',
      completion: '2021-11-25T12:00:00.000Z'
    },
    slug: 'hacienda-refurbishment'
  },
  {
    _id: '2x56y0349',
    title: 'Winter house in Switzerland',
    description: 'Winter house on top of the hill pike, close to the alps',
    status: 'closed',
    location: {
      country: 'Switzerland',
      region: 'Wallis',
      city: 'Vals',
      street: 'Poststrasse 7',
      postalCode: '7132'
    },
    estimate: {
      budget: 200340000,
      currency: 'chf',
      completion: '2019-10-11T12:00:00.000Z'
    },
    current: {
      budget: 20510320,
      invested: 1,
      currency: 'chf',
      completion: '2019-10-28T13:44:05.840Z'
    },
    slug: 'winter-house-vals'
  },
  {
    _id: '2iu0f0349',
    title: 'Cottage in Bali',
    description: 'This project is to build a small cottage in Bali for the weekends.',
    status: 'ongoing',
    location: {
      country: 'Indonesia',
      region: 'Bali Island',
      city: 'Singaraja',
      street: 'Jl. Sudirman Gg. 3, 12',
      postalCode: 'BA46'
    },
    estimate: {
      budget: 1000000,
      currency: 'usd',
      completion: '2020-12-03T12:00:00.000Z'
    },
    current: {
      budget: 1020000,
      invested: 0.6,
      currency: 'usd',
      completion: '2020-12-06T12:00:00.000Z'
    },
    slug: 'cottage-bali'
  }
]

export default portfolio_mock;