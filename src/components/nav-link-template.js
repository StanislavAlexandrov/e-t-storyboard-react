import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const pageMotion = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }, //exit is not being used at the moment
};

const NavLinkTemplate = ({ route, nav }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageMotion}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link
                className="lg:px-4 lg:py-4 lg:m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300"
                to={route}
            >
                {nav}
            </Link>
        </motion.div>
    );
};

export default NavLinkTemplate;
