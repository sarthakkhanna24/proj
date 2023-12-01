const express=require('express');
const app =express();
const host=3000;
const cors=require('cors');

app.use(express.json());
app.use(cors());
let posts=[];
let idx=1;

app.post('/createPost', (req,res)=>{
    const post={
    Id:idx,
    Name:req.body.Name,
    Job:req.body.Title,
    Experience:req.body.Age

    }
    idx=idx+1;
    posts.push(post);
    res.status(200).json(post);
})

app.get('/getAllPost',(req,res)=>{
    res.json(posts);
})

app.get('/getPost/:id',(req,res)=>{
    for(let i=0;i<posts.length;i++){
        const element=posts[i];
        if(element.id == req.params.id){
            res.json(element);
            return;
        }

    }

    res.status(201).json(
        {
           "msg": "not found"
        }
    )

})
app.patch('/editPost/:id',(req,res)=>{
    for(let i=0;i<posts.length;i++){
        const element=posts[i];

        if(element.Id == req.params.id){
                element.Name=req.body.Name;
                element.Job=req.body.Title;
                element.Experience=req.body.Age;

                res.json(element)
          

            return;
        }

    }

    res.json(
        {
           "msg": "not found"
        }
    )


})

app.delete('/deletePost/:id',(req,res)=>{
    for(let i=0;i<posts.length;i++){
        const element=posts[i];
        // console.log(element.)
        if(element.Id == req.params.id){
           posts.splice(i,1);
           res.json(element);
            return;
        }

    }

    res.status(201).json(
        {
           "msg": "not found"
        }
    )
})


app.listen(host,()=>{
    console.log("server start");
})