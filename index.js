const express = require('express')
const app = express()
const PORT = 8080
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ready-run')

const Schema = mongoose.Schema;

const userInfo = new Schema({
  account: String,
  date: String,
});

const userData = mongoose.model('userData', userInfo)



app.use(express.json())

app.listen(
  PORT,
  () => console.log(`Listening on port ${PORT}`)
)


app.get('/foo', (req, res) => {
  userData.find()
    .then(data => {
      console.log(data, 'data')
      res.send(data)
    })
})


app.post('/fuck', (req, res) => {
  // const {id} = req.params
  const {
    account,
    date,
  }  = req.body

  console.log(account, 'account')

  const data = new userData({
    account,
    date,
  })

  data.save(err => {
    console.log(err, '保存发生错误')
  })

  res.send({
    code: 200,
    msg: '保存成功'
  })

  // if(!logo) {
  //   res.status(400).send('We need a logo!')
  // }
  //
  // res.send({
  //   id: {
  //     logo
  //   }
  // })
})
