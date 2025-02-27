import { motion } from "motion/react";
import { Link } from "@remix-run/react";
import { socialNetworks } from "../constants/social-networks";

const Home = () => {
    
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 w-32">
                <nav className="px-4 py-4">
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex flex-col">
                            {socialNetworks.map((({ url: socialMediaUrl, icon: SocialMediaIcon }) => (
                                <Link
                                to={socialMediaUrl}
                                target="_blank"
                                className="hover:text-purple-500 transition-colors mb-2"
                                >
                                <SocialMediaIcon size={15} />
                                </Link>
                            )))}
                        </div>
                    </div>

                    <motion.div
                    className="p-1.5 hidden items-center sm:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    >
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
                    </motion.div>

                    <div className="text-sm mt-12 mx-2 tracking-widest -rotate-90 transform origin-left">
                        Me Siga
                    </div>
                </nav>
            </header>
        </>
    );
  }
  
export default Home;