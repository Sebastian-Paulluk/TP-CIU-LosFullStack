import { Spinner } from 'react-bootstrap'
import './LoadingScreen.scss'

export const LoadingScreen =()=> {
    
    return (
        <div className="d-flex justify-content-center loading-screen">
            <Spinner animation="border" variant="secondary" role="status" className='spin' />
        </div>
    )
}