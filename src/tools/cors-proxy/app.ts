import { WriteStream } from 'fs';
import express from 'express';
import cors from 'cors';
import axios, { AxiosResponse } from 'axios';
import { config } from './config';

const aladinApiBaseUrl = "https://www.aladin.co.kr/ttb/api/ItemList.aspx";
const aladinApiSearchUrl = "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";
const aladinApiLookUpUrl = "http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx";

const fetchData = async (url: any, headers = {}) => {
	try {
		const response = await axios.get(url, { headers });
		return response.data;
	} catch (error) {
		throw new Error("에러 발생");
	}
};


const app = express();
app.use(cors());

app.get("/bestseller", async (req, res) => {
	const ttbKey = req.query.TTBKEY;
	const queryType = "Bestseller";
	const aladinApiUrl = `${aladinApiBaseUrl}?ttbkey=${ttbKey}&QueryType=${queryType}&MaxResults=100&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId&Version=20131101`;
	try {
		const data = await fetchData(aladinApiUrl);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error });
	}
	
})

app.listen(config.port);
console.log(`Listening port: ${config.port}`);

