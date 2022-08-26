const express = require('express');
const router = express.Router();
const yfyDao = require('../../dao/yfy/index.js');

router.post('/check_member_by_mobile', async (req, res) => { //檢查第三方會員是否存在
   let result = await yfyDao.check_member_by_mobile(req.body);

   // res.json({
   //    rcrm: { RC: 'C01', RM: '成功', RM_detail: '', RM_debug: '' },
   //    results: {
   //       api_name: '/member/check_third_party_crm_data',
   //       payload: 'aaa',
   //       send_payload: { 
   //          third_party_crm_data: [
   //             {
   //                level: {
   //                   level_code: 'A',
   //                   level_end_datetime: '9999-02-10 00:00:00'
   //                },
   //                name: 'Bob',
   //                member_no: '12334'
   //             },
   //             {
   //                level: {
   //                   level_code: 'A',
   //                   level_end_datetime: '9999-02-10 00:00:00'
   //                },
   //                name: 'harvey-1',
   //                member_no: '12334'
   //             },
   //             {
   //                level: {
   //                   level_code: 'B',
   //                   level_end_datetime: '9999-02-10 00:00:00'
   //                },
   //                name: 'harvey-2',
   //                member_no: 'abc123'
   //             },
   //          ]
   //       }
   //    },
   //    next: null
   // })

   // console.log(result)
   res.json(result);
});

router.post('/verify_mobile_barcode', async (req, res) => { //驗證手機條碼載具
   let result = await yfyDao.verify_mobile_barcode(req.body);
   res.json(result);
});

router.post('/register_with_third_party_crm_data', async (req, res) => { //第三方開通註冊
   let result = await yfyDao.register_with_third_party_crm_data(req.body);
   res.json(result);
});

router.post('/level', async (req, res) => { //等級資訊
   let result = await yfyDao.level(req.body);
   res.json(result);
});

router.post('/point_balance', async (req, res) => { //購物金餘額
   let result = await yfyDao.point_balance(req.body);
   res.json(result);
});

router.post('/point_detail', async (req, res) => { //購物金異動及消費資料
   let result = await yfyDao.point_detail(req.body);
   res.json(result);
});

module.exports = router;