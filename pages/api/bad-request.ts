// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  message: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message = "Bad request" } = req.query; //esperamos un mensaje si no viene asignamos uno por defecto

  res.status(400).json({
    ok: false,
    message,
  });
}
