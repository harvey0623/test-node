const express = require("express");
const router = express.Router();
const axios = require('axios')

router.get('/user', async(req, res) => {
  let result = await axios({
    url: 'https://randomuser.me/api/',
    method: 'get'
  })
  res.json({ data: result.data })
})

router.get("/banner", async (req, res) => {
  res.json({
    total: 4,
    count: 4,
    per_page: 5,
    current_page: 1,
    total_pages: 1,
    status: 1,
    message: "Success",
    aaData: [
      {
        id: 1,
        title: "banner1",
        summary: "banner1",
        images: [
          "https://fakeimg.pl/1920x1080?text=bnner1",
        ],
        url: null,
        rank: 1,
        create_time: "2022/06/08 11:27:03",
        update_time: "2022/06/08 11:30:40",
      },
      {
        id: 2,
        title: "banner2",
        summary: "banner2",
        images: [
          "https://fakeimg.pl/1920x1080?text=bnner2",
        ],
        url: null,
        rank: 2,
        create_time: "2022/06/08 11:29:01",
        update_time: "2022/06/08 11:30:41",
      },
    ],
  });
});

router.get("/popular_info", async (req, res) => {
  let layerId = req.query.layer
  res.json({
    total: 6,
    count: 6,
    per_page: 6,
    current_page: 1,
    total_pages: 1,
    status: 1,
    message: "Success",
    aaData: [
      {
        id: 1,
        layer: 1,
        title: "3C家電/周邊",
        summary: "3C家電/周邊",
        images: [
          `https://fakeimg.pl/${layerId === 1 ? 250 : 1920}x250?text=popular${layerId}`,
        ],
        url: null,
        rank: 1,
      },
      {
        id: 2,
        layer: 1,
        title: "量販專區",
        summary: "量販專區",
        images: [
          `https://fakeimg.pl/${layerId === 1 ? 250 : 1920}x250?text=popular${layerId}`,
        ],
        url: null,
        rank: 2,
      },
      {
        id: 3,
        layer: 1,
        title: "寄賣專區",
        summary: "寄賣專區",
        images: [
          `https://fakeimg.pl/${layerId === 1 ? 250 : 1920}x250?text=popular${layerId}`,
        ],
        url: null,
        rank: 2,
      },
    ],
  });
});

router.get("/advertise", async (req, res) => {
  res.json({
    "total": 4,
    "count": 4,
    "per_page": 5,
    "current_page": 1,
    "total_pages": 1,
    "status": 1,
    "message": "Success",
    aaData: [
      {
        "id": 5,
        "title": "advertise1",
        "summary": null,
        "images": [
          "https://fakeimg.pl/1920x180?text=ad1"
        ],
        "url": null,
        "rank": 1,
        "create_time": "2022/06/08 12:56:26",
        "update_time": "2022/06/08 12:58:04"
      },
      {
        "id": 6,
        "title": "advertise2",
        "summary": "advertise2",
        "images": [
          "https://fakeimg.pl/1920x180?text=ad2"
        ],
        "url": null,
        "rank": 2,
        "create_time": "2022/06/08 12:57:03",
        "update_time": "2022/06/08 12:58:05"
      },
    ],
  });
});

router.get("/news_top", async (req, res) => { //首頁左邊
  res.json({
    total: 8,
    count: 8,
    per_page: 8,
    current_page: 1,
    total_pages: 1,
    status: 1,
    message: "Success",
    aaData: [
      {
        "id": 1,
        "category_id": 0,
        "title": "暑期大回饋，499歡樂頌！全商城系列商品特價優惠！",
        "summary": null,
        "images": [
          "https://fakeimg.pl/600x400?text=news1"
        ],
        "detail": "<p><strong>暑期大回饋，499歡樂頌！全商城系列商品特價優惠！</strong></p>",
        "status": 1,
        "rank": 1,
        "start_time": "2022/06/15",
        "end_time": "2022/06/30",
        "create_time": "2022/06/14 10:37:26",
        "update_time": "2022/06/14 10:37:29",
        "pre_id": null,
        "next_id": null
      },
      {
        "id": 2,
        "category_id": 0,
        "title": "端午活動",
        "summary": null,
        "images": [
          "https://fakeimg.pl/600x400?text=news2"
        ],
        "detail": "<p><strong>端午活動</strong></p>",
        "status": 1,
        "rank": 2,
        "start_time": "2022/06/15",
        "end_time": "2022/06/30",
        "create_time": "2022/06/14 14:55:40",
        "update_time": "2022/06/14 14:59:50",
        "pre_id": null,
        "next_id": null
      },
    ],
  });
});

router.get("/news", async (req, res) => { //首頁右邊
  res.json({
    total: 8,
    count: 8,
    per_page: 8,
    current_page: 1,
    total_pages: 1,
    status: 1,
    message: "Success",
    aaData: [
      {
        "id": 3,
        "category_id": 0,
        "title": "中秋活動",
        "summary": null,
        "images": [
          "https://fakeimg.pl/600x400?text=news3"
        ],
        "detail": "<p><strong>中秋活動</strong></p>",
        "status": 1,
        "rank": 3,
        "start_time": "2022/06/15",
        "end_time": "2022/06/30",
        "create_time": "2022/06/14 14:56:07",
        "update_time": "2022/06/14 14:59:51",
        "pre_id": null,
        "next_id": null
      },
      {
        "id": 4,
        "category_id": 0,
        "title": "耶誕活動",
        "summary": null,
        "images": [
          "https://fakeimg.pl/600x400?text=news4"
        ],
        "detail": "<p><em><strong>耶誕活動</strong></em></p>",
        "status": 1,
        "rank": 4,
        "start_time": "2022/06/15",
        "end_time": "2022/06/30",
        "create_time": "2022/06/14 14:56:36",
        "update_time": "2022/06/14 14:59:51",
        "pre_id": null,
        "next_id": null
      },
    ],
  });
});

router.get("/product_popular", async (req, res) => {
  res.json({
    "aaData": [
      {
        "id": 1,
        "category_id": 8,
        "product_code": "887bd5fb966996392629dc76b364cf0d",
        "product_tag": "1",
        "specs": [
          {
            "id": 1,
            "images": [
              "http://knn.test/images/empty.png"
            ],
            "spec_num": "21111-1",
            "spec_title": "藍色原子筆",
            "spec_unit": "",
            "stock_check": 0,
            "spec_stock": 0
          },
          {
            "id": 2,
            "images": [
              "http://knn.test/images/empty.png"
            ],
            "spec_num": "21111-2",
            "spec_title": "紅色原子筆",
            "spec_unit": null,
            "stock_check": 0,
            "spec_stock": 0
          }
        ],
        "stocks": [
          {
            "product_spec_id": 1,
            "stock_check": 0,
            "stock_count": null
          },
          {
            "product_spec_id": 2,
            "stock_check": 0,
            "stock_count": null
          }
        ],
        "product_stock": 0,
        "product_stock_input": 0,
        "product_stock_output": 0,
        "activity_product": 0,
        "images": [
          "http://knn.test/storage/upload/userdata/02e996ef-df7e-bff6-a837-89daa9a90179/2022061311340062a6b02895396.jpeg"
        ],
        "main_image": "https://fakeimg.pl/300x300?text=item1",
        "product_company": null,
        "product_weight": 0,
        "product_volume": 0,
        "product_unit": null,
        "product_name": "原子筆",
        "product_num": "21111",
        "product_summary": "原子筆",
        "product_detail": "<p><strong>原子筆</strong></p>",
        "product_price": 100,
        "product_promo_price": 80,
        "create_time": "2022/06/13 11:34:34",
        "update_time": "2022/06/15 15:15:12"
      },
      {
        "id": 2,
        "category_id": 9,
        "product_code": "08cbb868f7dc8e23e0c2d5e7d1c95828",
        "product_tag": "1",
        "specs": [
          {
            "id": 3,
            "images": [
              "http://knn.test/images/empty.png"
            ],
            "spec_num": "21112-1",
            "spec_title": "2B鉛筆",
            "spec_unit": "",
            "stock_check": 0,
            "spec_stock": 0
          }
        ],
        "stocks": [
          {
            "product_spec_id": 3,
            "stock_check": 0,
            "stock_count": null
          }
        ],
        "product_stock": 0,
        "product_stock_input": 0,
        "product_stock_output": 0,
        "activity_product": 0,
        "images": [
          "http://knn.test/storage/upload/userdata/02e996ef-df7e-bff6-a837-89daa9a90179/2022061311431262a6b250768a4.jpeg"
        ],
        "main_image": "https://fakeimg.pl/300x300?text=item2",
        "product_company": null,
        "product_weight": 0,
        "product_volume": 0,
        "product_unit": null,
        "product_name": "鉛筆",
        "product_num": "21112",
        "product_summary": "鉛筆",
        "product_detail": "<p><em>鉛筆</em></p>",
        "product_price": 50,
        "product_promo_price": 30,
        "create_time": "2022/06/13 11:43:14",
        "update_time": "2022/06/15 15:15:29"
      },
      {
        "id": 3,
        "category_id": 10,
        "product_code": "665fc6faa8f37c92bb073453cee313e6",
        "product_tag": "1",
        "specs": [
          {
            "id": 4,
            "images": [
              "http://knn.test/images/empty.png"
            ],
            "spec_num": "31111-1",
            "spec_title": "黑色鋼筆",
            "spec_unit": "",
            "stock_check": 0,
            "spec_stock": 0
          }
        ],
        "stocks": [
          {
            "product_spec_id": 4,
            "stock_check": 0,
            "stock_count": null
          }
        ],
        "product_stock": 0,
        "product_stock_input": 0,
        "product_stock_output": 0,
        "activity_product": 0,
        "images": [
          "http://knn.test/storage/upload/userdata/02e996ef-df7e-bff6-a837-89daa9a90179/2022061409391062a7e6be1e9f2.jpeg"
        ],
        "main_image": "https://fakeimg.pl/300x300?text=item3",
        "product_company": null,
        "product_weight": 0,
        "product_volume": 0,
        "product_unit": null,
        "product_name": "鋼筆",
        "product_num": "31111",
        "product_summary": "鋼筆",
        "product_detail": "<p><strong>鋼筆</strong></p>",
        "product_price": 500,
        "product_promo_price": 400,
        "create_time": "2022/06/14 09:39:11",
        "update_time": "2022/06/15 15:15:34"
      }
    ],
    "total": 3,
    "count": 3,
    "per_page": null,
    "current_page": 1,
    "total_pages": 1,
    "status": 1,
    "message": "Success"
  })
});

router.get("/product_category", async (req, res) => {
  res.json({
    "status": 1,
    "message": "success",
    "aaData": [
      {
        "id": 0,
        "level": 1,
        "parent_id": 0,
        "category_name": "全部商品",
        "category_second_name": "All Products",
        "subcategories": []
      },
      {
        "id": 1,
        "level": 1,
        "parent_id": 0,
        "category_name": "文具",
        "category_second_name": "文具",
        "subcategories": [
          {
            "id": 5,
            "level": 2,
            "parent_id": 1,
            "category_name": "筆",
            "category_second_name": "筆",
            "subcategories": [
              {
                "id": 8,
                "level": 3,
                "parent_id": 5,
                "category_name": "原子筆",
                "category_second_name": "原子筆"
              },
              {
                "id": 9,
                "level": 3,
                "parent_id": 5,
                "category_name": "鉛筆",
                "category_second_name": "鉛筆"
              },
              {
                "id": 10,
                "level": 3,
                "parent_id": 5,
                "category_name": "鋼筆",
                "category_second_name": "鋼筆"
              }
            ]
          },
          {
            "id": 6,
            "level": 2,
            "parent_id": 1,
            "category_name": "筆記本",
            "category_second_name": "筆記本",
            "subcategories": [
              {
                "id": 100,
                "level": 3,
                "parent_id": 6,
                "category_name": "筆記本1",
                "category_second_name": "筆記本1"
              },
              {
                "id": 101,
                "level": 3,
                "parent_id": 6,
                "category_name": "筆記本2",
                "category_second_name": "筆記本2"
              },
              {
                "id": 102,
                "level": 3,
                "parent_id": 6,
                "category_name": "筆記本3",
                "category_second_name": "筆記本3"
              }
            ]
          },
          {
            "id": 7,
            "level": 2,
            "parent_id": 1,
            "category_name": "膠帶",
            "category_second_name": "膠帶",
            "subcategories": []
          }
        ]
      },
      {
        "id": 2,
        "level": 1,
        "parent_id": 0,
        "category_name": "生活",
        "category_second_name": "生活",
        "subcategories": []
      },
      {
        "id": 3,
        "level": 1,
        "parent_id": 0,
        "category_name": "家電",
        "category_second_name": "家電",
        "subcategories": []
      },
      {
        "id": 11,
        "level": 1,
        "parent_id": 0,
        "category_name": "戶外",
        "category_second_name": "戶外",
        "subcategories": [
          {
            "id": 12,
            "level": 2,
            "parent_id": 11,
            "category_name": "水",
            "category_second_name": "水",
            "subcategories": [
              {
                "id": 13,
                "level": 3,
                "parent_id": 12,
                "category_name": "水槍",
                "category_second_name": "水槍"
              },
              {
                "id": 14,
                "level": 3,
                "parent_id": 12,
                "category_name": "水砲",
                "category_second_name": "水砲"
              },
            ]
          },
        ]
      }
    ]     
  })

});

module.exports = router;
