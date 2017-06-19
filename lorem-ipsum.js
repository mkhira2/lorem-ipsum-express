const express = require('express')
const app = express()

var loremIpsum = require('lorem-ipsum')
var output = loremIpsum({count: 3, units: 'paragraphs', suffix: '<br />'})

function addLorem() {
  return output
}

app.get('/', function (req, res) {
  res.send('Lorem Ipsum' + '<br /><br />' + 'Add /lorem to the url to get some lorem up in here!')
})

app.get('/lorem', function (req, res) {
  res.send(addLorem())
})

app.get('/lorem/:tagID', function (req, res) {
  res.send(loremIpsum({count: req.params.tagID, units: 'paragraphs', suffix: '<br />'}))
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
})
