"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/clients/clients.module.css';
import log from "media/banner/log.png"


const Video = () => {

    return (
        <>
            <section className={`newcon ${styles.touch}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-1 items-center ${styles.world}`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Our  <span className="colorred2">Clients</span>
                            </h3>
                            <Image src={log} className="d-block m-auto mt-5" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Video
