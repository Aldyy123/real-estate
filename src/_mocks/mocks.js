import searchIcon from '../Assets/Images/icons/magnifying-glass.svg'
import chatBuble from '../Assets/Images/icons/chat-bubble.svg'
import user from '../Assets/Images/icons/user.svg'
import history from '../Assets/Images/icons/history.svg'
import category from '../Assets/Images/icons/list.svg'

const homes = [
  {
    id: 1,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Utara , Budi Hasian',
    price: 300,
    status: 2,
    place: 2,
    type: 1,
    favourite: true
  },
  {
    id: 2,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Barat , Budi Hasian',
    price: 400,
    status: 1,
    place: 2,
    type: 1,
    favourite: true
  },
  {
    id: 3,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Pusat , Budi Hasian',
    price: 500,
    status: 2,
    place: 3,
    type: 3,
    favourite: true
  },
  {
    id: 4,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Bekasi , Budi Hasian',
    price: 600,
    status: 3,
    place: 5,
    type: 3,
    favourite: true
  },
  {
    id: 5,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Tangerang , Budi Hasian',
    price: 700,
    status: 1,
    place: 2,
    type: 5,
    favourite: false
  },
  {
    id: 6,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Pusat , Santosa',
    price: 500,
    status: 1,
    place: 2,
    type: 1,
    favourite: false
  },
  {
    id: 7,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Pusat , Amirul',
    price: 500,
    status: 2,
    place: 2,
    type: 3,
    favourite: false
  },
  {
    id: 8,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Utara , Kasrol',
    price: 100,
    status: 2,
    place: 1,
    type: 1,
    favourite: true
  },
  {
    id: 9,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Barat , Betung',
    price: 100,
    status: 3,
    place: 2,
    type: 2,
    favourite: false
  },
  {
    id: 10,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Bekasi , Tambun',
    price: 100,
    status: 1,
    place: 4,
    type: 2,
    favourite: false
  },
  {
    id: 11,
    images: [
      require('../Assets/Images/img/Rectangle-18.png'),
      require('../Assets/Images/img/Rectangle-19.png'),
      require('../Assets/Images/img/Rectangle-20.png')
    ],
    title: 'Rumah Tipe 68 Jalan Petukangan Tangerang , YOs sudarso',
    price: 100,
    status: 3,
    place: 5,
    type: 3,
    favourite: false
  },
]

const navigation = [
  {
    link: '/',
    icons: searchIcon,
    title: 'Search'
  },
  {
    link: '/chat',
    icons: chatBuble,
    title: 'Chat'
  },
  {
    link: '/',
    icons: category,
    title: 'Category'
  },
  {
    link: '/',
    icons: history,
    title: 'History'
  },
  {
    link: '/',
    icons: user,
    title: 'Profile'
  }
]

const places = [
  {
    id: 1,
    place: 'Jakarta Utara'
  },
  {
    id: 2,
    place: 'Jakarta Barat'
  },
  {
    id: 3,
    place: 'Jakarta Pusat'
  },
  {
    id: 4,
    place: 'Bekasi'
  },
  {
    id: 5,
    place: 'Tangerang'
  }
]

const typePropMock = [
  {
    id: 1,
    type: 'House'
  },
  {
    id: 2,
    type: 'Townhouse'
  },
  {
    id: 3,
    type: 'Apartement'
  },
  {
    id: 4,
    type: 'Room'
  }
]

const statusPropMock = [
  {
    id: 1,
    title: 'Rent'
  },
  {
    id: 2,
    title: 'Buy'
  },
  {
    id: 3,
    title: 'Auction'
  }
]

export {
  homes, navigation, places,
  typePropMock,
  statusPropMock
}
