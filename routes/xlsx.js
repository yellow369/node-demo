const { Router } = require('express')

const fs = require('fs')
const xlsx = require('node-xlsx')
const router = Router()

// 安全事故
router.post('/xlsx/security', (req, res) => {
  fs.readFile('./upload/security.xlsx', 'binary', (err, dataStr) => {
    if(err) {
      console.log('读取失败' + err.message);
    } else {
      console.log('读取安全事故表--成功');
    }
    let list = xlsx.parse('./upload/security.xlsx')
    res.send(list)
  })
})

// 检查
router.post('/xlsx/check', (req, res) => {
  fs.readFile('./upload/check.xlsx', 'binary', (err, dataStr) => {
    if(err) {
      console.log('读取失败' + err.message);
    } else {
      console.log('读取检查表--成功');
    }
    let list = xlsx.parse('./upload/check.xlsx')
    res.send(list)
  })
})

// 原材料预约
router.post('/xlsx/order', (req, res) => {

  fs.readFile('./upload/order.xlsx', 'binary', (err, dataStr) => {
    if(err) {
      console.log('读取失败' + err.message);
    } else {
      console.log('读取原材料预约表--成功');
    }
    let list = xlsx.parse('./upload/order.xlsx')
    res.send(list)
  })
})

// 原材料库存
router.post('/xlsx/stock', (req, res) => {
  fs.readFile('./upload/stock.xlsx', 'binary', (err, dataStr) => {
    if(err) {
      console.log('读取失败' + err.message);
    } else {
      console.log('读取原材料库存表--成功');
    }
    let list = xlsx.parse('./upload/stock.xlsx')
    res.send(list)
  })
})
// 测试
router.get('/gaeaDict/all',(req,res) => {
  res.send({code:'User.credentials.expired'})
})

router.get('/txt', (req, res) => {
  
  fs.readdir('./upload', (err, files) => {
    if (err) {
      console.log(err.message);
      throw new Error('读取文件错误')
    }
    // console.log(files);
    files.forEach((e) => {
      if (/(?:(\.txt))/.test(e)) {
        fs.readFile(`./upload/${e}`, 'utf-8',(err, dataStr) => {
          if (err) {
            console.log(err.message);
          }
          console.log('txt 内容');
          res.send(dataStr)
        })
      }
    })
  })
})


module.exports = router
