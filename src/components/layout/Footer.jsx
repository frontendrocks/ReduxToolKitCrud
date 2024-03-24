import './Footer.css'
const Footer = () => {
    const d = new Date();
let year = d.getFullYear();
    return (
        <div className='footer'>
            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            © {year} Copyright: <span className="">My Cart</span>
        </div>
     </footer>
      </div>
    )
}

export default Footer;