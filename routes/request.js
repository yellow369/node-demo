const axios = require('axios')

const { Router } = require('express')

const fs = require('fs')

const router = Router()

// 出入库体积
router.post('/request/volume', (req, res) => {
  axios.post('https://infor.i.sinotrans.com/inforom/rest',{
    "method": "executeSql",
    "sqlDescript": "WH051KB_QueryVolume"
} ).then((data) => {
  console.log('出入库体积请求--成功');

  res.send(data.data)
}).catch((err) => {
  console.log(err);
  res.send('infor接口请求超时')
})
})

// 库位信息
router.post('/request/stock', (req, res) => {
  
  axios.post('https://infor.i.sinotrans.com/inforom/rest',{
    "method": "executeProcedureNew",
    "procedureName": "WMWHSE51.rpt_kb_pkg.queryLocPer",
    "params": {}
} ).then((data) => {
  console.log('库位信息请求--成功');

  res.send(data.data)
}).catch((err) => {
  console.log(err);
  res.send('infor接口请求超时')
})
})

// 入库
router.post('/request/in', (req, res) => {
  
  axios.post('https://infor.i.sinotrans.com/inforom/rest',{"method":"executeSql","sqlDescript":"WH051KB_QueryInOrderData"} ).then((data) => {
  console.log('入库请求--成功');

  res.send(data.data)
}).catch((err) => {
  console.log(err);
  res.send('infor接口请求超时')
})
})

// 出库
router.post('/request/out', (req, res) => {
  
  axios.post('https://infor.i.sinotrans.com/inforom/rest',{"method":"executeSql","sqlDescript":"WH051KB_QueryOutOrderData"} ).then((data) => {
  console.log('出库请求--成功');

  res.send(data.data)
}).catch((err) => {
  console.log(err);
  res.send('infor接口请求超时')
})
})

module.exports = router