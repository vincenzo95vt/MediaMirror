import React, { useState } from 'react'
import "./MainContainer.css"
import { getNewsReport } from '../../core/services/services';

const MainContainer = () => {
    const [isLoading, setIslLoading] = useState(false);
    const [url, setUrl] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [content, setContent] = useState(undefined)
    const [serchNewURL, setSearchNewURL] = useState(false)

    const handleFindLink = async () => {
        try {
            setIslLoading(true);
            const data = await getNewsReport(url);
            if(data.error){
                setError(data)
            }else if(!data.error){
                setError(undefined)
                setContent(data.content)
            }
        } catch (error) {
            console.error(error.message)
        } finally{
            setIslLoading(false)
        }
        
    };

    const cleanSearchedUrl = () => {
        setUrl(undefined)
        setContent(undefined)
        setSearchNewURL(true)
    }
  return (
    <div className='main-cnt'>
        <div className='url-cnt'>
            <span className='url'>URL: </span>
            <input type="link" className='link' value={url} onChange={(e) => setUrl(e.target.value)}/>
            <button type='submit' className='btn-find' onClick={handleFindLink}>Investigar</button>
            <button onClick={()=> cleanSearchedUrl()}>Limpiar</button>
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
                <div className='info-cnt'>
                    {
                        error ? 
                        (
                            <span>{error.message}</span>
                        ) 
                        :
                        (   
                            content ? 
                            (
                                <>
                                    <h2 className='title'>{content.titulo}</h2>
                                    <span className='news-summary'>{content.resumen}</span>
                                    <span className='news-report'>{content.analisis || content.explicacion}</span>
                                    <span className="news-bias">{content.sesgo}</span>
                                    <span className='news-question'>{content.pregunta}</span>
                                    <div className='tendency'>
                                        <span className='news-tendency-name'>Tendencia de la noticia: </span>
                                        <span className={`news-tendency-${content.tendencia}`}>{content.tendencia}</span>
                                    </div>
                                </>   
                            )
                            :
                            (
                                serchNewURL ? 
                                (
                                    <span>Busca otra noticia!</span>
                                )
                                :
                                (
                                    <span>Haz tu primera busqueda!</span>
                                )
                               
                            )
                        )
                    }
                </div>                    
            )
        }
        
    </div>
  )
}

export default MainContainer
