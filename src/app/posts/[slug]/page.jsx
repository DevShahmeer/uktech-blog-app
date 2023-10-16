import Menu from '@/src/components/Menu/Menu'
import Comments from '@/src/components/comments/Comments'
import styles from './singlePage.module.css'
import Image from 'next/image'
import React from 'react'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>11.01.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus obcaecati non provident suscipit quo repellendus, ipsa nobis ipsum illum quidem at ea modi. Tempore doloribus aperiam quibusdam accusamus molestias aliquam consectetur cupiditate eligendi, quos repellendus dolorem velit voluptates laborum, molestiae dolores veniam?</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo praesentium et incidunt rem voluptatibus, totam fugiat nostrum maxime odit sit animi explicabo eos laudantium dolore perspiciatis. Earum dicta neque totam facere harum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo praesentium et incidunt rem voluptatibus, totam fugiat nostrum maxime odit sit animi explicabo eos laudantium dolore perspiciatis. Earum dicta neque totam facere harum.</p>
            </div>
            <div className={styles.comment}>
            <Comments />
            </div>  
        </div>
        <Menu/>
        </div>
    </div>
  )
}

export default SinglePage
