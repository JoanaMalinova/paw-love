export const Logo = ({ onLogoClick, styles }) => {

    return (
        <div className={styles.logo} onClick={onLogoClick}>
            <img src="images/logo.png" alt="paw-love-logo" />
            <p><span className="green">PAW</span><span className="pink">Love</span></p>
        </div>
    )
}