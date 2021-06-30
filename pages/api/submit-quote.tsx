import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { formattedQuoteRequest } from '../../utils/api';
import { SENDGRID_API_KEY } from '../../utils/constants';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const config = {
      headers: {
        Authorization: SENDGRID_API_KEY
      }
    };

    const requestUrl = "https://api.sendgrid.com/v3/mail/send";

    return axios.post(requestUrl, formattedQuoteRequest(req.body), config).then(response => {
      if (response.status === 202) {
        res.send({ success: true });
      }
      else {
        res.send({ success: false });
      }
    });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }

};