import express from 'express';
import Result from '../global/Result'
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(Result.success("成功"));
});

export default router;
