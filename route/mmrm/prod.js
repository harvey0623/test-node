const axios = require('axios')
const qs = require('qs')
const express = require('express');
const router = express.Router();
const pointDao = require('../../dao/mmrm/point/index.js');
const transactionDao = require('../../dao/mmrm/transaction/index.js');
const brandDao = require('../../dao/mmrm/brand/index.js');
const memberDao = require('../../dao/mmrm/member/index.js');
const levelDao = require('../../dao/mmrm/level/index.js');
const storeDao = require('../../dao/mmrm/store/index.js');
const couponDao = require('../../dao/mmrm/coupon/index.js');
const activityDao = require('../../dao/mmrm/activity/index.js');
const cmsDao = require('../../dao/mmrm/cms/index.js');
const termDao = require('../../dao/mmrm/term/index.js');
const menuDao = require('../../dao/mmrm/menu/index.js');
const notifyDao = require('../../dao/mmrm/notify/index.js');
const missionDao = require('../../dao/mmrm/mission/index.js');
const voucherDao = require('../../dao/mmrm/voucher/index.js');

router.post('/recaptcha', async(req, res) => {
   let payload = qs.stringify({
      secret: '6LfqA68UAAAAAKpqmI-bYbRNTNKHqYzlCl_MrRyO',
      response: req.body.token
   })
   let response = await axios({
      url: 'https://www.google.com/recaptcha/api/siteverify',
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: payload
   }).then(res => {
      return res.data
   })
   res.json(response)
})

//===多品牌api
router.post('/multiple_brand', (req, res) => {
   res.json({ 
      multiple_brand: '1', //0(單品牌) 1(多品牌)
      open_external_link_hint: ''
   });
});

//===config
router.post('/config/brief_config', async (req, res) => {
   let result = await memberDao.config(req.body);
   res.json(result);
});

router.post('/config/brief_copywriting_config', async (req, res) => {
   let result = await memberDao.copywriting(req.body);
   res.json(result);
});

//===level
router.post('/level_information', async (req, res) => {
   let result = await levelDao.getLevelInfo(req.body);
   res.json(result);
});

//===member
router.post('/register_check', async (req, res) => {
   let result = await memberDao.register_check(req.body);
   res.json(result);
});

router.post('/register', async (req, res) => {
   let result = await memberDao.register(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/member_summary', async (req, res) => {
   let result = await memberDao.memberSummary();
   res.json(result);
});

router.post('/member_profile', async (req, res) => {
   let result = await memberDao.memberProfile();
   res.json(result);
});

router.post('/member_card', async (req, res) => {
   let result = await memberDao.memberCard();
   res.json(result);
});

router.post('/verify_password', async (req, res) => {
   let result = await memberDao.verifyPassword(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/update_member_profile', async (req, res) => {
   let result = await memberDao.updateMemberProfile(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/login', async (req, res) => {
   let result = await memberDao.login(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/logout', async (req, res) => {
   let result = await memberDao.logout();
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/update_member_photo', async (req, res) => {
   let result = await memberDao.updateMemberPhoto(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/update_member_password', async (req, res) => {
   let result = await memberDao.updateMemberPassword(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/update_member_mobile', async (req, res) => {
   let result = await memberDao.updateMemberMobile(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/member_verify', async (req, res) => { //修改手機號碼的簡訊驗證
   let result = await memberDao.memberVerify(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/resend_member_verify', async (req, res) => { //重新寄送手機修改驗證碼
   let result = await memberDao.resendVerify(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/v1.2/forget_password', async (req, res) => {  //忘記密碼(手機確認)
   let result = await memberDao['forget_password_v1.2'](req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/resend_forget_verify', async (req, res) => { //寄送忘記密碼驗證碼
   let result = await memberDao.resend_forget_verify(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/forget_password_verify', async (req, res) => { //碼驗證碼驗證
   let result = await memberDao.forget_password_verify(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/reset_password', async (req, res) => { //重設密碼
   let result = await memberDao.reset_password(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/resend_register_verify', async (req, res) => { //發放註冊驗證碼
   let result = await memberDao.resend_register_verify(req.body);
   res.json(result);
});

router.post('/register_verify', async (req, res) => { //註冊驗證碼驗證
   let result = await memberDao.register_verify(req.body);
   res.json(result);
});

//===point
router.post('/point_history', async (req, res) => {
   let result = await pointDao.getPointHistory(req.body);
   res.json(result);
});

router.post('/point_due_to_expire', async (req, res) => {
   let result = await pointDao.pointExpire(req.body);
   res.json(result);
});

router.post('/point_information', async (req, res) => {
   let result = await pointDao.getPointInfo(req.body);
   res.json(result);
});

router.post('/external_point_information', async (req, res) => {
   let result = await pointDao.getExternalPointInfo(req.body);
   res.json(result);
});

//===transaction
router.post('/transaction_history', async (req, res) => {
   let result = await transactionDao.getHistory(req.body);
   res.json(result);
});

router.post('/transaction_detail', async (req, res) => {
   let result = await transactionDao.getDetail(req.body);
   res.json(result);
});

//===brand
router.post('/search_brand', async (req, res) => {
   let result = await brandDao.searchBrand();
   res.json(result);
});

router.post('/brand_information', async (req, res) => {
   let result = await brandDao.getBrandInfo(req.body);
   res.json(result);
});

//===store
router.post('/search_store', async (req, res) => {
   let result = await storeDao.searchStore(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/store_information', async (req, res) => {
   let result = await storeDao.storeInfo(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/search_coupon_available_store', async (req, res) => {
   let result = await storeDao.searchStoreByCoupon(req.body);
   res.json(result);
});

router.post('/search_voucher_available_store', async (req, res) => {
   let result = await storeDao.voucherStore(req.body);
   res.json(result);
});

//===coupon
router.post('/my_coupon_list', async (req, res) => {
   let result = await couponDao.couponList(req.body);
   res.json(result);
});

router.post('/my_coupon_detail', async (req, res) => {
   let result = await couponDao.couponDetail(req.body);
   res.json(result);
});

router.post('/coupon_information', async (req, res) => {
   let result = await couponDao.couponInfo(req.body);
   res.json(result);
});

router.post('/transfer_my_coupon', async (req, res) => {
   let result = await couponDao.couponTransfer(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

//===activity
router.post('/brief_coupon_activity_type', async (req, res) => {
   let result = await activityDao.briefCouponActivity();
   res.json(result);
});

router.post('/search_coupon_activity', async (req, res) => {
   let result = await activityDao.searchCouponActivity(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/coupon_activity_information', async (req, res) => {
   let result = await activityDao.couponActivityInformation(req.body);
   res.json(result);
});

router.post('/redeem_coupon_activity', async (req, res) => {
   let result = await activityDao.redeemCouponActivity(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/brief_point_activity_type', async (req, res) => {
   let result = await activityDao.briefPointActivity(req.body);
   res.json(result);
});

router.post('/search_point_activity', async (req, res) => {
   let result = await activityDao.searchPointActivity(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/point_activity_information', async (req, res) => {
   let result = await activityDao.pointActivityInformation(req.body);
   res.json(result);
});

router.post('/redeem_point_activity', async (req, res) => {
   console.log(req.body);
   let result = await activityDao.redeemPointActivity(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

//===cms
router.post('/cms_list_category_information', async(req, res) => {
   let result = await cmsDao.listCategory(req.body);
   res.json(result);
});

router.post('/search_cms_list_item', async (req, res) => {
   let result = await cmsDao.searchListItem(req.body);
   res.json(result);
});

router.post('/cms_book', async (req, res) => {
   let result = await cmsDao.cmsBook(req.body);
   res.json(result);
});

router.post('/cms_book_page', async (req, res) => {
   let result = await cmsDao.cmsBookPage(req.body);
   res.json(result);
});

router.post('/public_message_inbox', async (req, res) => {
   let result = await cmsDao.publicMessage(req.body);
   res.json(result);
});

router.post('/member_message_inbox', async (req, res) => {
   let result = await cmsDao.memberMessage(req.body);
   res.json(result);
});

//===notify
router.post('/member_notification_inbox', async (req, res) => {
   let result = await notifyDao.memberNotify(req.body);
   res.json(result);
});

//===term
router.post('/brief_term', async (req, res) => {
   let result = await termDao.term(req.body);
   res.json(result);
});

//===menu
router.post('/brief_menu_list', async (req, res) => {
   let result = await menuDao.getList(req.body).then(res => res);
   res.json(result);
});

router.post('/brief_menu_item_category', async (req, res) => {
   let result = await menuDao.getCategory(req.body).then(res => res);
   res.json(result);
});

router.post('/menu_item_information', async (req, res) => {
   let result = await menuDao.getItemInfo(req.body).then(res => res);
   res.json(result);
});

//===mission
router.post('/mission/task_information', async (req, res) => {
   let result = await missionDao.task_information(req.body)
   res.json(result);
});

router.post('/search_mission', async (req, res) => {
   let result = await missionDao.searchMission(req.body).then(res => res);
   res.json(result);
});

router.post('/mission_information', async (req, res) => {
   let result = await missionDao.getMissionInfo(req.body).then(res => res);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/my_mission_information', async (req, res) => {
   let result = await missionDao.getMyMissionInfo(req.body).then(res => res);
   res.json(result);
});

//===voucher
router.post('/voucher_information', async (req, res) => {
   let result = await voucherDao.voucherInfo(req.body);
   res.json(result);
});

module.exports = router;