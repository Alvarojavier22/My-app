import { Express } from "express";
const app = express()

app.use('/', express.static(__dirname + "/static"))
app.use('/posts', router)

app.listen(4000, () => {
  console.log('server listen on http://localhost:4000')
});
