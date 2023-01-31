import React, {useState} from 'react'
import {Configuration, OpenAIApi} from 'openai'


function Create() {
    const [text, setText] = useState('')
    const [image, setImage] = useState()
    const configuration = new Configuration({
        apiKey: import.meta.env.OPEN_AI_KEY
    })
    const openai = new OpenAIApi(configuration)

    const generateImg = async() => {
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size:"1024x1024"
        })
        setImage(response.data.data[0].url)
    }
  return (
    <section className='text-center'>
        <h2 className='header'>ImgGen</h2>
        <textarea name="" id="" cols="30" rows="2" onChange={(e) => setText(e.target.value)}></textarea>
        <div>
        <button className='btn-submit' onClick={generateImg}>Generate</button>
        </div>
        <div>
            <h2 className='Generated-image'>Image</h2>
                    <img src={image} alt="" className='image-generated' />   
                    <div>
                        <button className='btn-save'>Save</button>    
                    </div>      
        </div>
    </section>
  )
}

export default Create