import m from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={m.container}>
            <div className={m.wrapper}>
                <p className={m.smallText}>Created by</p>
                <h1 className={m.largeText}>Grabrick</h1>
            </div>
        </footer>
    )
}

export default Footer