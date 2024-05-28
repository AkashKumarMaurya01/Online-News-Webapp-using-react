// "RCC" short cut for class base component in vscode
import React from 'react'


const Newitems =(props)=> {
  
        let { title, description, imgUrl, NewsUrl, author , date ,source} = props
        // in class base conponent we need to get props to use this.props
        return (
            <div>
                <div className="card my-3"> 
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:0}}>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                </div>
                    
                    <img src={!imgUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imgUrl } className="card-img-top" alt="refresh again"/>
                    <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted" style={{fontSize:"19px"}}> <strong> By {!author?"unknown":author} At {new Date(date).toGMTString()}</strong></small></p>
                    <a rel="noreferrer" href={NewsUrl} target="_blank" className="btn btn-sm btn-dark">Todays news</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newitems
