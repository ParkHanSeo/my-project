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
	const { TTBKey } = req.query;
	const queryType = "Bestseller";
	const aladinApiUrl = `${aladinApiBaseUrl}?ttbkey=${TTBKey}&QueryType=${queryType}&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId&Version=20131101`;
	try {
		const data = await fetchData(aladinApiUrl);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error });
	}
})

app.get("/searchBook", async (req, res) => {
	const { TTBKey, isbn } = req.query;
	const aladinApiUrl = `${aladinApiSearchUrl}?ttbkey=${TTBKey}&itemIdType=ISBN&ItemId=${isbn}&output=js&Version=20131101&OptResult=ebookList,usedList,reviewList`;
	try {
		const data = await fetchData(aladinApiUrl);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error });
	}
})

app.listen(config.port);
console.log(`Listening port: ${config.port}`);

