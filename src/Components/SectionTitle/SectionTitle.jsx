import './SectionTitle.scss'

export const SectionTitle =({title})=> {

    return (
        <div className='section-title-container'>
            <h3 className='section-title'>{title}</h3>
        </div>
    )
}