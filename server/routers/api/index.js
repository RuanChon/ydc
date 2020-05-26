const Router = require('koa-router');
const re = require('../../lib/re')
const uuid = require('uuid/v4');
const config = require('../../config');

let router = new Router();

router.get('/acc_catalog', async ctx=>{
    ctx.body = ['娱乐', '教育', '美食', '体育'];
});

router.get('/catalog/:parent', async ctx=>{
    let {parent} = ctx.params;

    ctx.body = await ctx.db.query("select ID,title from catalog_tb where parentID=?",[parent]);
})

router.get('/get_province', async ctx=>{
    ctx.body = await ctx.db.query('select * from province');
})

router.get('/get_city/:proid', async ctx=>{
    let {proid} = ctx.params;
    ctx.body = await ctx.db.query('SELECT * FROM city where proID=?',proid);
    
})

// -----reg------
router.post('/reg', async ctx=>{
    let res = ctx.request.fields;

    if(!re.email.test(res['email'])){
        ctx.body = {err:1, msg:'email err'}
    }else{
        await ctx.db.query("insert into user_tb (email, password, type, display_name, slogan, catalog, icon, desctiption, other_channels, name, identify_number, province, city, qq_wx, recommend_code, token, token_expires) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [res['email'], res['password'], res['type'], res['display_name'], res['slogan'], res['catalog'], res['icon'], res['desctiption'], res['other_channels'], res['name'], res['identify_number'], res['province'], res['city'], res['qq_wx'], res['recommend_code'], '', 0]);
    }

    ctx.body={err:0, msg:'ok'}
})


// -----login------
router.post('/login', async ctx=>{
    let {email, password} = ctx.request.fields;

    let res = await ctx.db.query("select * from user_tb where email=?", [email]);

    if(res.length==0){
        ctx.body={err:1, msg:'user not find'};
    }else{
        let row = res[0]

        if(row['password']!=password){
            ctx.body={err:1, msg:'password not'};
        }else{
            token=uuid().replace(/\-/g, '');
            token_age=Math.floor((Date.now()+config.TONKEN_AGE)/1000);

            await ctx.db.query("update user_tb set token=?, token_expires=? where email=?", [token, token_age, email]);

            ctx.body={err:0, token}
        }
    }
})

// ------
router.post('/publish', async ctx=>{
    let post=ctx.request.fields;
    let token = post['token'];

    let rows = await ctx.db.query("select ID,token_expires from user_tb where token=?",[token]);

    if(!rows.length){
        ctx.body={err:1, msg:'need login'}
    }else{
        let {ID, token_expires} = rows[0];
        let now = Math.floor((Date.now()+config.TONKEN_AGE)/1000);
        if(now<token_expires){
            ctx.body={err:1, msg:'need goq'};
        }else{
            let catalogs = post['catalogs'].join(',');

            await ctx.db.query('insert into article_tb (title, content, catalogs, cover, userID, post_time, review) values(?, ?, ?, ?, ?, ?, ?)',
            [
                post['title'], post['content'], catalogs, post['cover'], ID, now, 0, 
            ]);

            ctx.body={err:0, msg:'发布成功'}
        }
    }

})


module.exports = router.routes();