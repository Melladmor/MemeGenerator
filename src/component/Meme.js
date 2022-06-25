import React,{useState,useEffect} from "react";
// import { DATA } from "../data.js/memesData";
const Meme = ()=>{


    const [meme , setMeme] = useState({
        topText:"Top Text",
        bottomText:"Bottom Text",
        randomImage:"https://i.imgflip.com/1bgw.jpg"
    })
    
    // useEffect(()=>{
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(res => res.json())
    //     .then(data => setAllMemeImages(data))
    // },[])


    useEffect(()=>{
        async function fetchData(){
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json()
        setAllMemeImages(data)
        }
        fetchData();
    },[])

    const [allMemeImages , setAllMemeImages] = useState()

    const getMemeImg=()=>{
        const memsArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memsArray.length);
        const url = memsArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }));
    }

    const handleChange =(event)=>{
        const key = event.target.name;
        const value = event.target.value
        setMeme(prevMeme =>{
            return{
                ...prevMeme,
                [key]:value
            }
        })
    }
    return(
        <div>
            <div className="formMeme">
                <input type="text" 
                placeholder="Top Text" 
                onChange={handleChange}
                name="topText"
                />
                <input type="text" 
                placeholder="Bottom Text" 
                onChange={handleChange}
                name="bottomText"
                />
                <button onClick={getMemeImg}>Get a new meme image   &#127750;</button>
            </div>
            <div className="divImage">
                    <p className="top">{meme.topText}</p>
                    <img src={meme.randomImage} alt="meme"/>
                    <p className="bottom">{meme.bottomText}</p>
            </div>
        </div>
    )
}

export default Meme;