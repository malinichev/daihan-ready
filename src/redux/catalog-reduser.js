import {CatalogItemsApi} from '../api';
import {isDataLoad, initializeApp} from './app-reduser';


const DEL_SLIDER1 = 'catalog/DEL_SLIDER1';
const UPDATE_ONE_1SLIDER = 'catalog/UPDATE_ONE_1SLIDER';
const IS_ITEMS_LOAD = 'catalog/IS_ITEMS_LOAD';
const SET_ITEMS = 'catalog/SET_ITEMS';
const IS_ERROR_ITEMS = 'catalog/IS_ERROR_ITEMS';

const SET_CURRENT_CAT = 'catalog/SET_CURRENT_CAT';
const SET_SELECTED_ITEM = 'catalog/SET_SELECTED_ITEM'
const SET_NEW_IMAGE = 'catalog/SET_NEW_IMAGE'
const IS_IMG_LOAD = 'catalog/IS_IMG_LOAD'


const initState = {
    
        
    currentCateg: 'ALL',
    isItemsLoad:false,
    isErrorItems:false,
    isImgLoad:true,
    selectedItem:[],
    items:[],
        // items:[
        //     {
        //     "values": [
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e7863afd6358c46bec75455",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/40/249x180/5dd564527f744.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e7863afd6358c58c0c75454",
        //     "label": "Мультизахват фиксированный",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e7863c4d6358cb873c75459",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/42/249x180/5dd565023767e.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e7863c4d6358cfecfc75458",
        //     "label": "Мультизахват вращающийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     }
        //     ],
        //     "_id": "5e786027d6358c1d72c75441",
        //     "srcCat": "http://www.daehanrussia.ru/upload/catalog/categories/images/30/375x271/5dc511ab0fcab.jpeg?crop=1&x1=0&y1=0&x2=0&y2=0",
        //     "name": "Мультизахваты",
        //     "categoryName": "multizahvat",
        //     "catFor": "Мультизахваты",
        //     "linkCat": "multizahvat",
        //     "__v": 2
        //     },
        //     {
        //     "values": [
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e7863e8d6358ce66fc7545c",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/43/249x180/5ddca624eb38e.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e7863e8d6358c6959c7545b",
        //     "label": "Ковш-захват вращающийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e7863fed6358cde69c75460",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/44/249x180/5ddca75579c59.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e7863fed6358c0299c7545f",
        //     "label": "Ковш-захват фиксированный",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "newest": "true",
        //     "__v": 1
        //     }
        //     ],
        //     "_id": "5e78605dd6358c5eb6c75442",
        //     "srcCat": "http://www.daehanrussia.ru/upload/catalog/categories/images/31/375x271/5dc512548f06b.jpeg?crop=1&x1=0&y1=0&x2=0&y2=0",
        //     "name": "Ковш-захваты",
        //     "categoryName": "covzahvat",
        //     "catFor": "Ковш-захваты",
        //     "linkCat": "covzahvat",
        //     "__v": 2
        //     },
        //     {
        //     "values": [
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786764d6358c5f2bc75463",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/47/249x180/5ddcaa86801d5.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786764d6358c5a4dc75462",
        //     "label": "Быстросъемные механизмы гидравлические pull-tupe",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786843d6358c17dfc75467",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/45/249x180/5ddca7a243a59.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786842d6358c0436c75466",
        //     "label": "Захват для сноса зданий вращающийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e78685bd6358c6a61c7546a",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/46/249x180/5ddca7f5d271e.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e78685bd6358c85cac75469",
        //     "label": "Захват для рельс вращающийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786877d6358cf7aac7546d",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/48/249x180/5ddca8633a787.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786877d6358c0872c7546c",
        //     "label": "Быстросъемные механизмы гидравлические push-tupe",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786890d6358c1086c75470",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/49/249x180/5ddca8b67d5f9.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786890d6358cdcb1c7546f",
        //     "label": "Вращающиеся вилы",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     }
        //     ],
        //     "_id": "5e7860dad6358c3ec7c75443",
        //     "srcCat": "http://www.daehanrussia.ru/upload/catalog/categories/images/32/375x271/5db6922280485.jpeg?crop=1&x1=0&y1=0&x2=0&y2=0",
        //     "name": "Остальные захваты и механизмы",
        //     "categoryName": "ostalniezahvatmechanism",
        //     "catFor": "Остальные захваты и механизмы",
        //     "linkCat": "ostalniezahvatmechanism",
        //     "__v": 5
        //     },
        //     {
        //     "values": [
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786321d6358c3520c75448",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/32/249x180/5dd5680ea05fc.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786321d6358c3c0ac75447",
        //     "label": "Бревнозахват вращающийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit natus nemo iusto hic accusantium sit illum, debitis pariatur reiciendis ipsa illo, cumque aspernatur tenetur voluptatum aperiam. Porro?     Perferendis libero soluta nesciunt, culpa voluptates id in maxime consequuntur impedit numquam distinctio perspiciatis, possimus repudiandae, pariatur sequi! Qui dolorem minima eligendi eaque adipisci? Deserunt veniam voluptatem consequuntur maiores debitis.     Laborum enim esse, ipsa labore sequi odit adipisci? Sed, ab amet odio labore, corporis, suscipit id rem voluptatem quo illum veniam totam explicabo neque voluptatibus perspiciatis delectus tenetur error in!     Vel dolorem quisquam, deleniti voluptatibus nisi excepturi nam, doloremque quis error qui tenetur culpa dignissimos obcaecati veniam, dolores fuga suscipit sunt assumenda itaque alias repellendus dolorum eos id tempora? Aut?     Consequatur iure aliquid necessitatibus provident beatae eos, quos vitae nostrum qui nam veritatis incidunt dolores modi neque soluta recusandae ipsa sed labore hic pariatur blanditiis ducimus sequi autem explicabo. Ad.     Fugit harum saepe numquam tenetur, tempora deleniti nisi praesentium debitis, libero, adipisci omnis quaerat ea pariatur nostrum! Corporis aliquid repellat sit voluptatem itaque? Quisquam doloremque molestias ullam dolorem eaque voluptate?",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786349d6358c84b5c7544c",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/41/249x180/5dd56859a7089.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786349d6358c2ed8c7544b",
        //     "label": "Мини бревнозахват наклоняющийся",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786367d6358c8248c7544f",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/38/249x180/5dd56570b7dca.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786367d6358c7203c7544e",
        //     "label": "Бревнозахват многоцелевой фиксированный",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "__v": 1
        //     },
        //     {
        //     "srcIm": [
        //     {
        //     "_id": "5e786386d6358c2960c75452",
        //     "im": "http://www.daehanrussia.ru/upload/catalog/items/images/39/249x180/5dd5662069115.jpeg?",
        //     "__v": 0
        //     }
        //     ],
        //     "_id": "5e786386d6358c0500c75451",
        //     "label": "Мини бревнозахват фиксированный",
        //     "shortRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?",
        //     "fullRead": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid ad eum consectetur assumenda ea iste cumque eaque molestias? Corrupti, cum quidem voluptas magnam veniam possimus eum officia iure hic.     Inventore, sunt sapiente! Ut perferendis commodi assumenda, autem accusamus neque, quidem aliquam in pariatur ex itaque asperiores. Eos quisquam, aspernatur modi ducimus voluptatum nulla necessitatibus repellat iure sequi explicabo aliquam?     Aliquid itaque laborum molestias beatae nesciunt ipsam illum, quisquam natus. Quia sunt nostrum provident ab aliquid cupiditate eveniet placeat voluptatem ad debitis quasi repudiandae, adipisci quos recusandae ducimus veritatis sapiente.     Labore, fugit nostrum quod, dolorum blanditiis error provident sunt et fuga similique, consequatur sit eos natus! Illo quae voluptatem fugit enim impedit, accusantium officiis doloremque quod nobis, ratione consectetur! Quasi!     Labore ducimus rem architecto voluptate est sunt temporibus id distinctio optio reprehenderit n",
        //     "__v": 1
        //     }
        //     ],
        //     "_id": "5e786111d6358c0547c75444",
        //     "srcCat": "http://www.daehanrussia.ru/upload/catalog/categories/images/29/375x271/5dc52ffc0bbc1.jpeg?crop=1&x1=0&y1=0&x2=0&y2=0",
        //     "name": "Бревнозахваты",
        //     "categoryName": "Brevnozahvati",
        //     "catFor": "Бревнозахваты",
        //     "linkCat": "Brevnozahvati",
        //     "__v": 4
        //     }
        //     ],
        
    
};

const catalogReduser = (state = initState, action) => {
    // debugger
    switch (action.type) {
        case SET_CURRENT_CAT:
            return {
                ...state,
                currentCateg: action.currentCateg
            }
        case SET_NEW_IMAGE:
            return {
                state,
            }
        case IS_IMG_LOAD:
            return {
                ...state,
                isImgLoad: action.isImgLoad
            }
        
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.selectedItem
            }
        
       
        case UPDATE_ONE_1SLIDER:
            // let idX = state.hpSliderItems.findIndex(el=>el.id===action.updateDataItem.id)
            return {
                state,
                // ...state.hpSliderItems,
                // hpSliderItems: [...state.hpSliderItems.slice(0, idX),action.updateDataItem, ...state.hpSliderItems.slice(idX + 1)]
            }
       
        case IS_ITEMS_LOAD:
            
            return {
                ...state,
                isItemsLoad: action.isItemsLoad  
            };
        case IS_ERROR_ITEMS:
            return {
                ...state,
                isItemsLoad: false,
                isError: action.isError  
            };
        case SET_ITEMS:
            let newIt = [...action.items]
            return {
                ...state,
                ...state.items,
                items: newIt
            };
        case DEL_SLIDER1:
            return {
                state
            };
        default:
            return state;
    }
};



export const isItemsLoad = (isItemsLoad) => ({
    type: IS_ITEMS_LOAD,
    isItemsLoad
})

export const isImgLoadAC = (isImgLoad) => ({
    type: IS_IMG_LOAD,
    isImgLoad
})
export const setAddNewImgAC = () => ({
    type: SET_NEW_IMAGE
})
export const setSelectedItemAc = (selectedItem) => ({
    type: IS_ITEMS_LOAD,
    selectedItem
})
export const setItems = (items) => ({
    type: SET_ITEMS,
    items
})
export const setCurrentCategAC = (currentCateg) => ({
    type: SET_CURRENT_CAT,
    currentCateg
})
export const setErrorItems = (err) => ({
    type: IS_ERROR_ITEMS,
    err
})


export const setCurrentCateg = (currentCateg) => (dispatch) => {    
        dispatch(setCurrentCategAC(currentCateg));
}  
export const setSelectedItem = (selectedItem) => (dispatch) => {   
        console.log(selectedItem) 
        dispatch(setSelectedItemAc(selectedItem));
}  
export const delOneCateg = (idDeletedCateg) => async  (dispatch) => {    
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.delOneCategory(idDeletedCateg)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }

}  
export const updateOneCateg = (idCateg, dataUpdateCat) => async  (dispatch) => {  
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.editOneCategory(idCateg, dataUpdateCat)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr Update Categ')
      }

}  

export const setNewCategory = (dataNewCategory) => {
    return async dispatch => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.addOneNewCategory(dataNewCategory)
            dispatch(initializeApp());
            
            
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Categ')
      }

        
    }
}
export const setNewItem = (categId, dataNewItem) => {
    return async dispatch => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.addOneNewItm(categId, dataNewItem)
            dispatch(initializeApp());

            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
    
            // console.log(res);
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Item')
      }

        
    }
}
export const setUpdateItem = (categId, itemId, dataIt) => {
    
    const {im, ...data} = dataIt
    
    console.log(data)
    return async dispatch => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.updateOneItm(categId, itemId, 
                data)
            
            let el = await CatalogItemsApi.getCategoryAndItemsApi() 
            
            dispatch(setItems(el))

            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
    
            
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr Update Item')
      }

        
    }
}
export const delOneItem = (categId, itemId) => async (dispatch) => {
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.delOneItm(categId, itemId)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }
}
export const setAddNewImg = (categId, itemId, dataNewImage) => {
    
    return async dispatch => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));
            dispatch(isImgLoadAC(false));

            await CatalogItemsApi.addOneNewImage(categId, itemId, dataNewImage)  
            let el = await CatalogItemsApi.getCategoryAndItemsApi() 
            dispatch(setItems(el))
        

            dispatch(isItemsLoad(true));
            dispatch(isImgLoadAC(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Image in item')
      }

        
    }
}
export const delOneImage = (categId, itemId, imageId) => async (dispatch) => {
    try {
        dispatch(isImgLoadAC(false));
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));
       
        await CatalogItemsApi.delOneImage(categId, itemId, imageId)
        let el = await CatalogItemsApi.getCategoryAndItemsApi() 
        await dispatch(setItems(el))
    
       
       
        dispatch(isItemsLoad(true));
        dispatch(isDataLoad(true));
        dispatch(setErrorItems(false));
        dispatch(isImgLoadAC(true));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }
}




export default catalogReduser