const router = require('express').Router();
const shortid = require('shortid');
const UrlShortenerModel = require('../models/url.model');
const short = require('shortid')


router.post('/submitUrl',async (req,res)=>{
   const { longUrl } = req.body;
   const shortkey = short.generate();
 
   try{
      const submitUrl = new UrlShortenerModel({longUrl,shortUrl:shortkey});
      const saved = await submitUrl.save();

      res.json({status:200,success:"Short URL Created"});
   }catch(err){
      res.status(500).json({error:"Server Error"});
   }
});


router.get('/:shortUrl',async(req,res)=>{
   const {shortUrl} = req.params;
   try{
      const url = await UrlShortenerModel.findOne({ shortUrl });
      if (url) {
         console.log("URL -> ",url.longUrl);
         return res.redirect(url.longUrl);
       } else {
         res.status(404).json({ error: 'URL not found' });
       }
   }catch(err){
      res.status(500).json({error:"Server Error"});
   }
})
module.exports = router;