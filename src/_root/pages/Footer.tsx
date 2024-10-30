import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <section id="footer" className="flex flex-col md:flex-row gap-5 md:flex-1 md:gap-5">
            <div>
                <h3 className="text-lg md:text-3xl font-bold font-ubuntu">Sopheng, Web Developer</h3>
            </div>
            <div className="hidden md:inline">
                <ul className="footer-navbar">
                    <li className="footer-nav-links hover:footer-nav-links-hover"><a href="#home">Home</a></li>
                    <li className="footer-nav-links hover:footer-nav-links-hover"><a href="#about">About</a></li>
                    <li className="footer-nav-links hover:footer-nav-links-hover"><a href="#projects">Project built</a></li>
                    <li className="footer-nav-links hover:footer-nav-links-hover"><a href="#contact">Contact me</a></li>
                </ul>
            </div>
            <div className="contact-link">
                <ul className="flex gap-5 items-center justify-center">
                    <li><a href="https://www.facebook.com/pheng.126/" target="_blank" className="text-2xl"><FaFacebook /></a></li>
                    <li><a href="https://www.instagram.com/sophengneat/"  target="_blank" className="text-2xl"><FaInstagram /></a></li>
                    <li><a href="https://t.me/nsopheng"  target="_blank" className="text-2xl"><FaTelegram /></a></li>
                    <li><a href="https://github.com/neatsopheng"  target="_blank" className="text-2xl"><FaGithub /></a></li>
                </ul>
            </div>
        </section>
        <section className="flex flex-col items-center justify-center">
            <div>Email me via: <a href="https://mail.google.com/mail/u/0/#advanced-search/to=nsopheng04%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=Neat+Sopheng?compose=new">nsopheng04@gmail.com</a></div>
            <span>Tel: 016 39 73 41</span>
            <a href="#home" className="mt-20 text-4xl p-2 border-2 border-[#c8ae51] rounded-full"><i className="fa-solid fa-angle-up fa-2xs" style={{color: "#FFD43B"}}>
              <span>G o_U p</span>
            </i></a>
        </section>
    </>

  )
}

export default Footer