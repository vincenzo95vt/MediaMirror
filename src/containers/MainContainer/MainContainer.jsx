import React, { useState } from 'react'
import "./MainContainer.css"
import { getNewsReport } from '../../core/services/services.';

const MainContainer = () => {
    const [isLoading, setIslLoading] = useState(false);
    const [url, setUrl] = useState(undefined)
    const [content, setContent] = useState(undefined)

    const handleFindLink = async () => {
        try {
            console.log(url)
            setIslLoading(true);
            const data = await getNewsReport(url);
            setContent(data.content)
        } catch (error) {
            console.error(error.message)
        } finally{
            setIslLoading(false)
        }
        
    };

  return (
    <div className='main-cnt'>
        <div className='url-cnt'>
            <span className='url'>URL: </span>
            <input type="link" className='link' value={url} onChange={(e) => setUrl(e.target.value)}/>
            <button type='submit' className='btn-find' onClick={handleFindLink}>Investigar</button>
        </div>
        {
            isLoading ? 
            (
                <div className='spinner-cnt'>
                    <span className="loader"></span>
                </div>
            )
            :
            (
                content ? 
                (
                    <div className="info-cnt">
                        {
                            Object.entries(content).map(([key, value]) => (
                                <div className={`cnt-section}`} key={key}>
                                    <p>{value}</p>
                                </div>
                            ))
                        }
                    </div>  
                ) 
                : 
                (
                    <div className="cnt-no-data">
                        <h2>Haz tu primera busqueda!</h2>
                    </div>
                )                 
            )
        }
        
    </div>
  )
}

export default MainContainer
