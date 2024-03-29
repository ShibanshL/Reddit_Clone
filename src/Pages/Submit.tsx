import React,{forwardRef} from 'react'
import { Grid,Group, Container,Input,Tabs,Text,Select,Avatar,Textarea,Divider,Button,Checkbox } from '@mantine/core'
import {FiSearch,FiLink} from 'react-icons/fi'
import {BsFilePost,BsFillImageFill,BsMic} from 'react-icons/bs'
import {MdErrorOutline} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {AiOutlineOrderedList} from 'react-icons/ai'
import { storeData } from '../firebase'
import {ref, getDownloadURL, uploadBytesResumable,uploadBytes} from 'firebase/storage'
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import { db } from '../firebase'


//This is just for the select option via mantine

const data=[
    { image:'https://i.pinimg.com/originals/d2/ca/5d/d2ca5d5bcb84c894739c9862a49e7820.jpg',
      value: 'MYacName', 
      label: 'U/MYacName', 
      group: 'YOUR PROFILE' },

    { image:'https://th.bing.com/th/id/R.0b6724f2e1deac8c980fbbee3f8eef02?rik=bWCtdZEK6Wyajg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f7%2f0%2f329845.jpg&ehk=8olme3cDzJrP4%2bXeWn8v8ejglVnuecfDhMBOPWUyaNc%3d&risl=&pid=ImgRaw&r=0',
      value: 'Meme', 
      label: 'u/Meme', 
      group: 'YOUR COMMUNITIES' },

    { image:'https://static.vecteezy.com/system/resources/previews/001/213/871/non_2x/breaking-news-background-design-vector.jpg',
      value: 'News', 
      label: 'u/News', 
      group: 'YOUR COMMUNITIES' },

    { image:'https://cdn.funcheap.com/wp-content/uploads/2017/12/sports1.png',
      value: 'Sports', 
      label: 'u/Sports', 
      group: 'YOUR COMMUNITIES' },

]
interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
    group:string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar style={{clipPath:'circle(50%)'}} src={image} />
  
          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

//Select option end

function Submit() {

    const [progress, setProgress] = React.useState(0);

    const [page,setPage] = React.useState('')
    
    const [img,setImg] = React.useState(null)
    const [post, setPost] = React.useState({
        title:'',
        desc:''
    })

    const [id,setId] = React.useState(0)

    const [postSub, setPostSub] = React.useState({
        sub_title:'',
        sub_desc:''
    })

    const [postImg,setPostImg] = React.useState({
        img_title:'',
        img_url:''
    })
    
    const [postImgSub, setPostImgSUb] = React.useState({
        sub_img_title:'',
        sub_img_url:''
    })

    const [postLink, setPostLink] = React.useState({
        post_title:'',
        post_Llnk:''
    })

    const [postLinkSub, setPostLinkSub] = React.useState({
        sub_post_title:'',
        sub_post_Llnk:''
    })

    const new_sub = async() => {

        const docRef = doc(db,'postData',`/id=${(new Date()).getTime()}/page=${page}/post=${post.title}`)
        const payLoad = {title:post.title,desc:post.desc}
        await setDoc(docRef,payLoad)
        alert('Done')

        setPost({
            title:'',
            desc:''
        })

    }

    const new_sub_1 = async() => {

        const docRef = doc(db,'postLink',`/id=${(new Date()).getTime()}/page=${page}/post=${postLink.post_title}`)
        const payLoad = {title:postLink.post_title,desc:postLink.post_Llnk}
        await setDoc(docRef,payLoad)
        alert('Done')

        setPostLink({
            post_Llnk:'',
            post_title:''
        })

    }

    const new_sub_2 = async() => {

        handleSubmit_Old()

        const docRef = doc(db,'postImage',`/id=${(new Date()).getTime()}/page=${page}/post=${postImg.img_title}`)
        const payLoad = {title:postImg.img_title}
        await setDoc(docRef,payLoad)
        alert('Done better')

        setPostImg({
            img_title:'',
            img_url:''
        })


    }

    const handleSubmit_Old = () =>{
        setId((new Date()).getTime())
        const dataRes = ref(storeData, `Data/${id}`)
        // var data:any = {img,img_title}
        uploadBytes(dataRes,img).then(()=>{
            alert('Done')
            // setTitle('')
            // setDesc('')
        })
    }

    //All the handle change functions are here

    const handleChange_Post = (e: { target: { name: any; value: any } }) => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    const handleChange_Img = (e: { target: { name: any; value: any } }) => {
        setPostImg({
            ...postImg,
            [e.target.name]:e.target.value
        })
    }

    const handleChange_Link = (e: { target: { name: any; value: any } }) => {
        setPostLink({
            ...postLink,
            [e.target.name]:e.target.value
        })
    }

    //Firebase Submit part

    const postSubmit = async () => {

        var title = post.title
        var desc = post.desc

        const res = await fetch('https://reddit-clone-83f7f-default-rtdb.firebaseio.com/postSubmit.json',
        {
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,desc
            })
        })
        
        setPost({
                    title:'',
                    desc:''
                })

    }

    const postImgSubmit = async () => {
        var title = postImg.img_title
        var desc = id

        const res = await fetch('https://reddit-clone-83f7f-default-rtdb.firebaseio.com/postImg.json',
        {
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,desc
            })
        })

        handleSubmit_Old()

            setPostImg({
                img_title:'',
                img_url:''
            })

    }

    const postLinkSubmit = async () => {
        var title = postLink.post_title
        var desc = postLink.post_Llnk

        const res = await fetch('https://reddit-clone-83f7f-default-rtdb.firebaseio.com/postLink.json',
        {
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,desc
            })
        })

        setPostLink({
                        post_Llnk:'',
                        post_title:''
                    })

    }


    const formHandler = (e:any) => {
        e.preventDefault();
        const file:any = e.target[0].files[0];
        uploadFiles(file);
      };

    const uploadFiles = (file:any) => {
        //
        if (!file) return;
        const sotrageRef = ref(storeData, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );
      };

    //Submit Function is here

    // const handleSubmit = () => {

    //     if(post.desc.length != 0 && post.title.length !=0 && postImg.img_title.length == 0 && postImg.img_url.length == 0 && postLink.post_title.length == 0 && postLink.post_Llnk.length == 0){

    //         setPostSub({
    //             sub_title:post.title,
    //             sub_desc:post.desc
    //         })

    //         postSubmit()

    //         setPost({
    //             title:'',
    //             desc:''
    //         })

    //     }

    //     else if(postImg.img_title.length != 0 && postImg.img_url.length != 0 && post.desc.length == 0 && post.title.length ==0 && postLink.post_title.length == 0 && postLink.post_Llnk.length == 0){

    //         setPostImg({
    //             img_title:postImg.img_title,
    //             img_url:postImg.img_url
    //         })

    //         postImgSubmit()

    //         setPostImg({
    //             img_title:'',
    //             img_url:''
    //         })

    //     }

    //     else if(postLink.post_title.length != 0 && postLink.post_Llnk.length != 0 && post.desc.length == 0 && post.title.length == 0 && postImg.img_title.length == 0 && postImg.img_url.length == 0){

    //         setPostLinkSub({
    //             sub_post_Llnk:postLink.post_Llnk,
    //             sub_post_title:postLink.post_title
    //         })

    //         postLinkSubmit()

    //         setPostLink({
    //             post_Llnk:'',
    //             post_title:''
    //         })
    //     }
    // } 

    

  return (
    <>
        <Container ml='90px' pt='100px' p='20px' size={1400} style={{minHeight:'100vh'}}>
            <Grid gutter={25}>
                <Grid.Col p='10px' span={12}>
                    <Group align='apart' p='10px' position='center' style={{ borderBottom:'2px solid rgba(255,255,255,0.2)'}} grow>
                        <Text size='xl' color='white'>Create a post: </Text>
                        <Text mt='8px' align='right' weight={700} size='xs' color='white'>DRAFT</Text>
                    </Group>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Select
                        placeholder="Choose a community"
                        itemComponent={SelectItem}
                        data={data}
                        searchable
                        maxDropdownHeight={400}
                        nothingFound="Nobody here"
                        filter={(value, item) =>
                          item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
                          item.description.toLowerCase().includes(value.toLowerCase().trim())
                        }
                        icon={<FiSearch />}
                        onChange={(e) => setPage(e)}
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Grid p='8px'>
                        <Grid.Col span={12} style={{background:'#1a1a1b'}}>
                            <Tabs color="gray" tabPadding="xl" grow>
                                <Tabs.Tab icon={<BsFilePost />} style={{color:'white'}} label="Post">
                                    <Grid grow>
                                        <Grid.Col span={12}>
                                            <Group p='10px 40px' grow>
                                                <Input 
                                                    value={post.title}
                                                    name='title'
                                                    onChange={(e:any) => {handleChange_Post(e); console.log(post.title)}}
                                                    placeholder='Title' />
                                            </Group>
                                            <Group p='10px 40px' grow>
                                                <Textarea
                                                    value={post.desc}
                                                    name='desc'
                                                    onChange={(e:any) => {handleChange_Post(e); console.log(post.desc)}}
                                                    placeholder='Text(optional)' />
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col p='0 45px' span={12}>
                                            <Divider my="md" color='rgba(255,255,255,0.3)'/>
                                        </Grid.Col>
                                        <Grid.Col pb='20px' span={12}>
                                            <Group  p='0 40px' position='right'>
                                                <Button radius='xl' variant='outline' size='xs' color='gray' disabled>Save Draft</Button>
                                                <Button radius='xl' variant='outline' size='xs' color='gray' onClick={new_sub}>Post</Button>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col p='20px 45px' style={{background:'#272729'}} span={12}>
                                            <Grid>
                                                <Grid.Col span={12}>
                                                <Checkbox
                                                    label={<Text color='white' size='sm'>Send me Post reply Notification</Text>}
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={12}>
                                                    <Link to='' style={{color:'rgb(78,184,249)'}}>Connect accounts to share your post <MdErrorOutline /></Link>
                                                </Grid.Col>
                                            </Grid>
                                        </Grid.Col>
                                    </Grid>
                                </Tabs.Tab>
                                <Tabs.Tab style={{color:'white'}} label="Images & Video" icon={<BsFillImageFill />}>
                                <Grid grow>
                                        <Grid.Col span={12} p='0 46px'>
                                            <Group p='10px 0px' grow>
                                                <Input 
                                                        value={postImg.img_title}
                                                        name='img_title'
                                                        onChange={(e:any) => { handleChange_Img(e); console.log(postImg.img_title)}}
                                                        placeholder='Title' />
                                            </Group>
                                            <Group p='' position='center' style={{border:'2px solid rgba(255,255,255,0.2)', borderRadius:'5px'}}>
                                                {/* <Text color='white'>Drag and drop images or </Text> */}
                                                <Input onChange={(event:any) => {setImg(event.target.files[0]);}} type='file' placeholder='Drag and drop images or video' style={{color:'white'}}/>
                                                <Button radius='xl' onClick={handleSubmit_Old} variant='outline' size='xs' color='gray'>Upload</Button>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col p='0 45px' span={12}>
                                            <Divider my="md" color='rgba(255,255,255,0.3)'/>
                                        </Grid.Col>
                                        <Grid.Col pb='20px' span={12}>
                                            <Group  p='0 40px' position='right'>
                                                <Button radius='xl' variant='outline' size='xs' color='gray' disabled>Save Draft</Button>
                                                <Button radius='xl' variant='outline' size='xs' color='gray' onClick={new_sub_2}>Post</Button>
                                            </Group>
                                        </Grid.Col>
                                        <Grid.Col p='20px 45px' style={{background:'#272729'}} span={12}>
                                            <Grid>
                                                <Grid.Col span={12}>
                                                <Checkbox
                                                    label={<Text color='white' size='sm'>Send me Post reply Notification</Text>}
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={12}>
                                                    <Link to='' style={{color:'rgb(78,184,249)'}}>Connect accounts to share your post <MdErrorOutline /></Link>
                                                </Grid.Col>
                                            </Grid>
                                        </Grid.Col>
                                    </Grid>
                                </Tabs.Tab>
                                <Tabs.Tab style={{color:'white'}} icon={<FiLink />} label="Link">
                                    <Grid grow>
                                            <Grid.Col span={12}>
                                                <Group p='10px 40px' grow>
                                                    <Input 
                                                        value={postLink.post_title}
                                                        name='post_title'
                                                        onChange={(e:any) => { handleChange_Link(e); console.log(postLink.post_title)}}
                                                        placeholder='Title' />
                                                </Group>
                                                <Group p='10px 40px' grow>
                                                    <Textarea 
                                                        value={postLink.post_Llnk}
                                                        name='post_Llnk'
                                                        onChange={(e:any) => { handleChange_Link(e); console.log(postLink.post_Llnk)}}
                                                        placeholder='Url' />
                                                </Group>
                                            </Grid.Col>
                                            <Grid.Col p='0 45px' span={12}>
                                                <Divider my="md" color='rgba(255,255,255,0.3)'/>
                                            </Grid.Col>
                                            <Grid.Col pb='20px' span={12}>
                                                <Group  p='0 40px' position='right'>
                                                    <Button radius='xl' variant='outline' size='xs' color='gray' disabled>Save Draft</Button>
                                                    <Button radius='xl' variant='outline' size='xs' color='gray' onClick={new_sub_1}>Post</Button>
                                                </Group>
                                            </Grid.Col>
                                            <Grid.Col p='20px 45px' style={{background:'#272729'}} span={12}>
                                                <Grid>
                                                    <Grid.Col span={12}>
                                                    <Checkbox
                                                        label={<Text color='white' size='sm'>Send me Post reply Notification</Text>}
                                                        />
                                                    </Grid.Col>
                                                    <Grid.Col span={12}>
                                                        <Link to='' style={{color:'rgb(78,184,249)'}}>Connect accounts to share your post <MdErrorOutline /></Link>
                                                    </Grid.Col>
                                                </Grid>
                                            </Grid.Col>
                                        </Grid>
                                </Tabs.Tab>
                                <Tabs.Tab style={{color:'rgba(255,255,255,0.3)'}} icon={<AiOutlineOrderedList />} label="Poll" disabled>Fourth tab content</Tabs.Tab>
                                <Tabs.Tab style={{color:'rgba(255,255,255,0.3)'}} icon={<BsMic />} label="Talk" disabled>Fifth tab content</Tabs.Tab>
                            </Tabs>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    </>

  )
}

export default Submit