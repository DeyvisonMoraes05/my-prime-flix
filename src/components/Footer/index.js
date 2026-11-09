import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <ul className='social_list'>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p className='copy_right'>
                &copy; 2026 | <span>my-prime-flix</span>
            </p>
            <p>
                Desenvolvido por DEV Deyvison Moraes
            </p>
        </footer>
    )
}

export default Footer