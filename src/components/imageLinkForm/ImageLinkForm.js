import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3 b'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center form pa3 br3 shadow-5'>
                <input type='text' className='f4 pa2 w-70 center'></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;