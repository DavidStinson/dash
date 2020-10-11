import * as express from 'express';

export const hello = function(req: express.Request, res: express.Response) {
  res.send("hello, friend")
}