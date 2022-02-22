const customers = {
    1: {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        street: '63 Blabla',
        city: 'Montreal',
        total: 45000,
        cart: {
            status: "current",
        }
    },
    2: {
        id: 2,
        firstname: 'Jahn',
        lastname: 'Dae',
        street: '22 Bipbop',
        city: 'Laval',
        total: 1000000,
        cart: {
            status: "current",
        }
    },
    3: {
        id: 3,
        firstname: 'Jim',
        lastname: 'Bo',
        street: '14 McDo',
        city: 'McCroquette',
        total: 45000,
        cart: {
            status: "current",
        }
    },
    4: {
        id: 4,
        firstname: 'Vita',
        lastname: 'Vida',
        street: '11 Little',
        city: 'Italy',
        total: 45000,
        cart: {
            status: "current",
            1: {
                name: 'banane',
                price: 35000,
                qty: 1
            },
            3: {
                name: 'pomme',
                price: 15000,
                qty: 4
            },
        }
    },
    5: {
        id: 5,
        firstname: 'Homer',
        lastname: 'Simpson',
        street: '1 Rando',
        city: 'Springfield',
        total: 0,
        cart: {
            status: "current",
        }
    },
    6: {
        id: 6,
        firstname: 'Bazooka',
        lastname: 'Joe',
        street: '111 BubbleGum',
        city: 'Hooba Boopa',
        total: 45000,
        cart: {
            status: "current",
        }
    },
    7: {
        id: 7,
        firstname: 'Vanilla',
        lastname: 'Ice',
        street: '1337 Cool',
        city: 'LA',
        total: 1500000,
        cart: {
            status: "pending",
            1: {
                name: 'banane',
                price: 35000,
                qty: 10
            },
            3: {
                name: 'pomme',
                price: 15000,
                qty: 5
            },
        }
    }
}

export default customers;