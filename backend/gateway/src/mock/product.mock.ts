export class ProductMock {
    private readonly products: object[] = null;

    constructor() {
        this.products = [
            {
                "_id": "6229ab647069c00dd276b630",
                "title": "Samsung",
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "price": 150000,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            },
            {
                "_id": "622ac3d4db84d65d17428a0a",
                "price": 150000,
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "title": "Ipad",
                "__v": 0,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            },
            {
                "_id": "622ac403db84d65d17428a0c",
                "price": 150000,
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "title": "Iphone",
                "__v": 0,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            },
            {
                "_id": "622ac414db84d65d17428a0e",
                "price": 150000,
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "title": "Hawei",
                "__v": 0,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            },
            {
                "_id": "622ac421db84d65d17428a10",
                "price": 150000,
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "title": "Nokia",
                "__v": 0,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            },
            {
                "_id": "622ac438db84d65d17428a12",
                "price": 150000,
                "description": "Điện thoại thông minh với tính năng vượt trội,tích hợp nhiều công nghệ mới nhất hiện nay.",
                "title": "Vinsmart",
                "__v": 0,
                "img": "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
            }
        ];
    }

    get(): object[] {
        return this.products;
    }
}