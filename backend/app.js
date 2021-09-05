const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

const url =
  "mongodb+srv://JoshuaSheng:joshua06@cluster0.c1cgm.mongodb.net/bettersurveys?retryWrites=true&w=majority";
const client = new MongoClient(url);
app.use(cors());

app.get("/", async (req, res) => {
  const survey = await getSurvey(req.query.id);
  res.status(200).send(survey);

  async function getSurvey(surveyID) {
    try {
      await client.connect();
      const db = client.db("bettersurveys");
      const collection = db.collection("survey");

      const query = { surveyid: parseInt(surveyID) };

      const result = await collection.find(query).toArray();
      console.log(result);
      return result;
    } catch (err) {
      console.log(err.stack);
    }
  }
});

app.post("/", bodyParser.json(), async (req, res) => {
  insertIntoDB(req.body);
  res.status(200).send("test");

  async function insertIntoDB(surveydata) {
    try {
      await client.connect();
      const db = client.db("bettersurveys");
      const collection = db.collection("surveydata");
      const result = await collection.insertOne({ surveydata });
      console.log(result);
    } catch (err) {
      console.log(err.stack);
    }
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`);
});
